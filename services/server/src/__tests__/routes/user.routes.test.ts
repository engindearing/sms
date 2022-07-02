import supertest from "supertest";

import app from "../../app";

import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";

import Seeds from "../../seeds/seeds";

jest.mock("../../middleware/authRequired");

import { authRequired } from "../../middleware/authRequired";

import { User } from "../../models/user.model";
import { Household } from "../../models/household.model";
import { Guest } from "../../models/guest.model";
import { Shelter } from "../../models/shelter.model";
import { Reservation } from "../../models/reservation.model";
import { parseDoc } from "../../utils/parseDoc";

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

describe("users", () => {
  describe("get current user", () => {
    it("should return 200 status and the current user", async () => {
      let user = await User.findOne({ email: "guest@gmail.com" });

      let { statusCode, body } = await supertest(app).get("/api/users/me");

      expect(statusCode).toBe(200);

      expect(body.currentUser).toEqual(parseDoc(user));
    });
  });

  describe("get current users household", () => {
    describe("given the user doesn't have a household", () => {
      it("should create a new household and return it", async () => {
        let user = await User.findOne({ email: "guest@gmail.com" });

        let { statusCode, body } = await supertest(app).get(
          "/api/users/me/household"
        );

        expect(statusCode).toBe(200);
        expect(body.household.user).toEqual(user?._id.toString());
      });
    });

    describe("given the user does have a household", () => {
      it("should return a 200 status with the household and it's members", async () => {
        let user = await User.findOne({ email: "guest@gmail.com" });

        let household = await Household.create({ user: user?._id });

        await Guest.create([
          { household: household._id },
          { household: household._id },
          { household: household._id },
        ]);

        let { statusCode, body } = await supertest(app).get(
          "/api/users/me/household"
        );

        expect(statusCode).toBe(200);

        expect(body.members).toHaveLength(3);

        expect(body.household).toEqual(parseDoc(household));
      });
    });
  });

  describe("get current users reservation", () => {
    describe("given the user has a household", () => {
      it("should return a 200 status with the reservation", async () => {
        let user = await User.findOne({ email: "guest@gmail.com" });

        let shelters = await Shelter.find({});

        let shelter = shelters[0];

        let household = await Household.create({ user: user?._id });

        let reservation = await Reservation.create({
          household: household._id,
          shelter: shelter._id,
          beds: 2,
        });

        let { statusCode, body } = await supertest(app).get(
          "/api/users/me/reservation"
        );

        expect(statusCode).toBe(200);

        expect(body.reservation).toEqual(parseDoc(reservation));
      });
    });
  });

  describe("delete current reservation", () => {
    it("should return a 200 and delete the reservation if it exists", async () => {
      let user = await User.findOne({ email: "guest@gmail.com" });

      let shelters = await Shelter.find({});

      let shelter = shelters[0];

      let household = await Household.create({ user: user?._id });

      await Reservation.create({
        household: household._id,
        shelter: shelter._id,
        beds: 2,
      });

      let reservation = await Reservation.find({ household: household._id });

      expect(reservation).toBeTruthy();

      let { statusCode } = await supertest(app).delete(
        "/api/users/me/reservation"
      );

      let deletedReservation = await Reservation.findOne({
        household: household._id,
      });

      expect(statusCode).toBe(200);
      expect(deletedReservation).toBeFalsy();
    });
  });
});
