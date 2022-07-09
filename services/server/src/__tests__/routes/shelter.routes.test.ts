import supertest from "supertest";

import app from "../../app";

import { User } from "../../models/user.model";

import { Seeds } from "../../seeds/seeds";

jest.mock("../../middleware/authRequired");

import { MongoMemoryServer } from "mongodb-memory-server";

import mongoose from "mongoose";

import { authRequired } from "../../middleware/authRequired";
import { Shelter } from "../../models/shelter.model";
import { parseDoc } from "../../utils/parseDoc";
import { Household } from "../../models/household.model";

beforeAll(async () => {
  let mongoServer = await MongoMemoryServer.create();

  await mongoose.connect(mongoServer.getUri());
});

beforeEach(async () => {
  await Seeds();

  let user = await User.findOne({ email: "guest@gmail.com" }).lean();

  // @ts-ignore
  authRequired.mockImplementation((req, res, next) => {
    req.user = user;
    next();
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("shelters", () => {
  describe("get all shelters", () => {
    it("should return a 200 status with a list of all shelters", async () => {
      let shelters = await Shelter.find({});

      let { body, statusCode } = await supertest(app).get("/api/shelters");

      expect(statusCode).toBe(200);
      expect(body).toEqual(parseDoc(shelters));
    });
  });

  describe("get total beds available", () => {
    describe("given the shelter exists", () => {
      it("should return 200 status with the total beds available", async () => {
        let shelter = await Shelter.findOne({});

        let { body, statusCode } = await supertest(app).get(
          `/api/shelters/${shelter?._id}/bedsAvailable`
        );

        expect(statusCode).toBe(200);

        expect(body).toStrictEqual({
          bedsReserved: expect.anything(),
          totalBeds: expect.anything(),
        });
      });
    });

    describe("given the shelter does not exist", () => {
      it("should return a 404 no found", async () => {
        let fakeId = new mongoose.Types.ObjectId();

        await supertest(app)
          .get(`/api/shelters/${fakeId}/bedsAvailable`)
          .expect(404);
      });
    });
  });

  describe("create reservation", () => {
    describe("given the shelter does not exist", () => {
      it("should return a 404 not found with error message", async () => {
        let fakeId = new mongoose.Types.ObjectId();

        await supertest(app)
          .post(`/api/shelters/${fakeId}/reservations`)
          .expect(404);
      });
    });

    describe("given the shelter does exist", () => {
      it("should return a 200 status with the created reservation", async () => {
        let guestUser = await User.findOne({ email: "guest@gmail.com" });

        let household = await Household.create({ user: guestUser?._id });

        let shelter = await Shelter.findOne({});

        let { statusCode, body } = await supertest(app)
          .post(`/api/shelters/${shelter?._id}/reservations`)
          .send({ household: household._id, shelter: shelter?._id, beds: 3 });

        expect(statusCode).toBe(200);
        console.log(body)
        expect(body.beds).toBe(3)
        expect(body.household).toBe(household._id.toString())
        expect(body.shelter).toBe(shelter?._id.toString())
      });
    });
  });
});
