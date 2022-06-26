import supertest from "supertest";

import app from "../../app";

import { User } from "../../models/user.model";

import Seeds from "../../seeds/seeds";

jest.mock("../../utils/createContext");

import createContext from "../../utils/createContext";

import { MongoMemoryServer } from "mongodb-memory-server";

import mongoose from "mongoose";
import { Shelter } from "../../models/shelter.model";

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

describe("shelters", () => {
  describe("list", () => {
    it("should return a list of all shelters", async () => {
      let { statusCode, body } = await supertest(app).get(
        "/trpc/shelters.list"
      );

      expect(statusCode).toBe(200);
      expect(body.result.data).toHaveLength(3);
    });
  });
});
