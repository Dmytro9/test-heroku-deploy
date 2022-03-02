const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("responds with Hello World", async () => {
    const response = await request(app).get("/").expect(200);

    expect(response.text).toBe("Hello World");
  });
});
