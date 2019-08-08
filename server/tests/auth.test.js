const request = require("supertest");
const auth = require("../routes/auth");
const getservices = require("../routes/getservices");

jest.setTimeout(30000);
// describe("POST /login", () => {
//   test("It responds login response", async function() {
//     const requestBody = {
//       username: "guest",
//       password: "a"
//     };

//     await request(auth)
//       .post("/login")
//       .send(requestBody)
//       .expect(200);

//     // const response = await request(auth)
//     //   .post("/login")
//     //   .send(requestBody);

//     // expect("Content-Type", /json/);
//     // expect(response.statusCode).toBe(200);
//     // done();
//   });
// });

describe("GET /home", () => {
  test("It responds get data", async function() {
    const requestBody = {
      serviceProvider: "aws",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };
    const reponse = await request(getservices)
      .get("/home")
      .set("Content-Type", "application/json")
      .set(requestBody)
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });
});

// describe("POST /signup", () => {
//   test("It responds signup response", async function() {
//     const requestBody = {
//       email: "test@test.test",
//       username: "test",
//       password: "a"
//     };

//     const response = await request(auth)
//       .post("/signup")
//       .send(requestBody);

//     expect("Content-Type", /json/);
//     expect(response.statusCode).toBe(200);
//     done();
//   });
// });

// a helper function to make a POST request
// var post = function(url, body) {
//   const httpRequest = request(auth).post(url);
//   httpRequest.send(body);
//   httpRequest.set("Accept", "application/json");
//   httpRequest.set("Origin", "http://localhost:4000");
//   return httpRequest;
// };
