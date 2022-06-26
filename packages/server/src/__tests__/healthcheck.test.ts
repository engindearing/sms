import supertest from "supertest";

import app from "../app";

describe("server is up and running", () => {
  it("should return a 200 status", async () => {
    await supertest(app).get("/healthcheck").expect(200);
  });
});
