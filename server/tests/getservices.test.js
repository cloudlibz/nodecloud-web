const supertest = require("supertest");
const app = require("../server");

let request;
request = supertest(app);

describe("GET /home", () => {
  it("It responds get data", function(done) {
    const requestBody = {
      serviceProvider: "aws",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };

    request
      .get("/home")
      .set("Content-Type", "application/json")
      .set(requestBody)
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        done();
      });
  });
});
