import supertest from "supertest";

import app from "../../app";

import { User } from "../../models/user.model";

import Seeds from "../../seeds/seeds";

jest.mock("../../utils/createContext");

import createContext from "../../utils/createContext";

import { MongoMemoryServer } from "mongodb-memory-server";

import mongoose from "mongoose";
import { Household } from "../../models/household.model";
import { Member } from "../../models/guest.model";

beforeAll(async () => {
  let mongoServer = await MongoMemoryServer.create();

  await mongoose.connect(mongoServer.getUri());
});

beforeEach(async () => {
  await Seeds();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("users", () => {
  describe("get current user", () => {
    it("should return 200 status and the current user", async () => {
      let user = await User.findOne({ email: "guest@gmail.com" }).lean();

      // @ts-ignore
      createContext.mockReturnValueOnce({ user });

      let { statusCode, body } = await supertest(app).get(
        "/trpc/users.current"
      );

      expect(statusCode).toBe(200);

      expect(body.result.data).toEqual({
        ...user,
        _id: expect.anything(),
        createdAt: expect.anything(),
        updatedAt: expect.anything(),
      });
    });
  });

  describe("get current users household", () => {
    describe("given the user doesn't have a household", () => {
      it("should create a new household and return it", async () => {
        let user = await User.findOne({ email: "guest@gmail.com" });

        // @ts-ignore
        createContext.mockReturnValueOnce({ user });

        let { statusCode, body } = await supertest(app).get(
          "/trpc/users.current.household"
        );

        expect(statusCode).toBe(200);
        expect(body.result.data.household.user).toEqual(user?._id.toString());
      });
    });

    describe("given the user does have a household", () => {
      it("should return a 200 status with the household and it's members", async () => {
        let user = await User.findOne({ email: "guest@gmail.com" });

        // @ts-ignore
        createContext.mockReturnValueOnce({ user });

        let household = await Household.create({ user: user?._id });

        await Member.create([
          { household: household._id },
          { household: household._id },
          { household: household._id },
        ]);

        let { statusCode, body } = await supertest(app).get(
          "/trpc/users.current.household"
        );

        expect(statusCode).toBe(200);

        expect(body.result.data.household).toEqual({
          ...household.toJSON(),
          _id: expect.anything(),
          createdAt: expect.anything(),
          updatedAt: expect.anything(),
          user: expect.anything(),
        });

        expect(body.result.data.members).toHaveLength(3);
      });
    });
  });
});
