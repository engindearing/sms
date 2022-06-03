import supertest from "supertest";

import app from "../api/app";

describe("index", () => {
  it("should return status code 200", async () => {
    await supertest(app).get("/api").expect(200);
  });
});
