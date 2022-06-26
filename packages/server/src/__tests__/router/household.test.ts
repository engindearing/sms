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

  await Seeds();

  let guestUser = await User.findOne({ email: "guest@gmail.com" });

  // @ts-ignore
  createContext.mockReturnValue({ user: guestUser });
});

beforeEach(async () => {
  await Seeds();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("households", () => {
  describe("update household", () => {
    describe("given the household exists", () => {
      it("should return a 200 status with the updated household", async () => {
        let guestUser = await User.findOne({ email: "guest@gmail.com" });

        let household = await Household.create({ user: guestUser?._id });

        expect(household.status).toBe("start");

        let { statusCode, body } = await supertest(app)
          .post("/trpc/households.update")
          .send({
            householdId: household._id,
            household: { status: "complete" },
          });
        expect(statusCode).toBe(200);

        expect(body.result.data.status).toBe("complete");
      });
    });

    describe("given the household does not exist", () => {
      it("should return a 404 not found", async () => {
        let fakeId = new mongoose.Types.ObjectId();

        await supertest(app)
          .post("/trpc/households.update")
          .send({
            householdId: fakeId,
            household: {},
          })
          .expect(404);
      });
    });
  });
});
