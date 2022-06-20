// Get all reservations by shelter id

// create a reservation

import supertest from "supertest";

import app from "../api/app";

import { MongoMemoryServer } from "mongodb-memory-server";

import mongoose from "mongoose";

import { authRequired } from "../api/middleware/authRequired";

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();

  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("create reservation", () => {
  describe("As a guest", () => {
    describe("Given the user isn't logged in", () => {
      it("Should return 401 unauthorized", async () => {
        await supertest(app).post("/users/me/reservations").expect(200);
      });
    });

    describe.skip("Given the user has a pending reservation", () => {
      it("Should return 400", () => {});
    });

    describe.skip("Given the user does not have a pending reservation", () => {
      it("Should return 200 and create the reservation", () => {});
    });
  });
});

describe.skip("Delete reservation", () => {
  describe("Given the user is not logged in ", () => {
    it("Should return 401 unauthorized", () => {});
  });

  describe("Given the user does not own the reservation", () => {
    it("Should return 401 unauthorized", () => {});
  });

  describe("Given the user does own the reservation", () => {
    it("Should return 200 and delete the reservation", () => {});
  });
});
