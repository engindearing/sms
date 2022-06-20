import supertest from "supertest";

import app from "../api/app";

import { MongoMemoryServer } from "mongodb-memory-server";

import mongoose from "mongoose";

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();

  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("organizations", () => {
  describe("gets all organizations", () => {
    it("returns 200", async () => {
      await supertest(app).get("/api/orgs").expect(200);
    });
  });
});
