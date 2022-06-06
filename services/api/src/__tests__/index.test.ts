import supertest from "supertest";

import app from "../api/app";

describe("index", () => {
  it("returns status code 200", async () => {
    await supertest(app).get("/api").expect(200);
  });
});
