const supertest = require("supertest");
const app = require("../server");

let request;
request = supertest(app);

describe("POST /login", () => {
  it("It responds login response", function(done) {
    const requestBody = {
      username: "guest",
      password: "a"
    };

    request
      .post("/login")
      .send(requestBody)
      .expect(200)
      .end(function(err, res) {
        console.log(res.statusCode);
        done();
      });
  });
});

describe("POST /signup", () => {
  it("It responds signup response", function(done) {
    const requestBody = {
      username: "guest",
      email: "guest@guest.com",
      password: "a"
    };

    request
      .post("/signup")
      .send(requestBody)
      .expect(200)
      .end(function(err, res) {
        console.log(res.statusCode);
        done();
      });
  });
});
