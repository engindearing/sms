import supertest from "supertest";

import app from "../../app";

import { User } from "../../models/user.model";

import Seeds from "../../seeds/seeds";

jest.mock("../../middleware/authRequired");

import { MongoMemoryServer } from "mongodb-memory-server";

import mongoose from "mongoose";
import { Household } from "../../models/household.model";
import { Guest } from "../../models/guest.model";

import { authRequired } from "../../middleware/authRequired";

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

describe("households", () => {
  describe("update household", () => {
    describe("given the household exists", () => {
      it("should return a 200 status with the updated household", async () => {
        let guestUser = await User.findOne({ email: "guest@gmail.com" });

        let household = await Household.create({ user: guestUser?._id });

        expect(household.status).toBe("start");

        let { statusCode, body } = await supertest(app)
          .patch(`/api/households/${household._id}`)
          .send({
            status: "complete",
          });

        expect(statusCode).toBe(200);

        expect(body.status).toBe("complete");
      });
    });

    describe("given the household does not exist", () => {
      it("should return a 404 not found", async () => {
        let fakeId = new mongoose.Types.ObjectId();

        let { body } = await supertest(app)
          .patch(`/api/households/${fakeId}`)
          .send({
            householdId: fakeId,
            household: {},
          })
          .expect(404);
      });
    });
  });

  describe("addMember", () => {
    describe("given the household exists", () => {
      it("return a 200 status with the new household member", async () => {
        let guestUser = await User.findOne({ email: "guest@gmail.com" });

        let household = await Household.create({ user: guestUser?._id });

        let { statusCode, body } = await supertest(app)
          .post(`/api/households/${household._id}/guests`)
          .send({ household: household._id });

        expect(statusCode).toBe(200);
        expect(body.household).toEqual(household._id.toString());
      });
    });

    describe("given the household does not exist", () => {
      it("should return a 404 not found", async () => {
        let fakeId = new mongoose.Types.ObjectId();
        await supertest(app)
          .post(`/api/households/${fakeId}/guests`)
          .expect(404);
      });
    });
  });

  describe("batch update guests", () => {
    describe("given the household exists", () => {
      it("should return a 200 status and update all guests in the list", async () => {
        let guestUser = await User.findOne({ email: "guest@gmail.com" });

        let household = await Household.create({ user: guestUser?._id });

        let guests = await Guest.create(
          { household: household._id },
          { household: household._id }
        );

        let { statusCode } = await supertest(app)
          .patch(`/api/households/${household._id}/guests`)
          .send([
            { _id: guests[0]._id, flag: "yellow" },
            { _id: guests[1]._id, flag: "red" },
          ]);

        expect(statusCode).toBe(200);

        let updatedGuests = await Guest.find({ household: household?._id });

        expect(updatedGuests[0].flag).toEqual("yellow");
        expect(updatedGuests[1].flag).toEqual("red");
      });
    });

    describe("given the household does not exist", () => {
      it("should return a 404 not found", async () => {
        let fakeId = new mongoose.Types.ObjectId();
        await supertest(app)
          .patch(`/api/households/${fakeId}/guests`)
          .expect(404);
      });
    });
  });
});
