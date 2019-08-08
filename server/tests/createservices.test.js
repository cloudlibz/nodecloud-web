const request = require("supertest");
const createservices = require("../routes/createservices");

// describe("POST /azure/create/virtualmachine", () => {
//   test("It responds with newly created azure virtual machine", async () => {
//     const requestBody = {
//       provider: "azure",
//       "Resource group": "l",
//       "Virtual machine name": "ol",
//       Location: "centralus",
//       "OS Type": "linux",
//       token:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
//     };

//     const response = await request(createservices)
//       .post("/azure/create/virtualmachine")
//       .send(requestBody);

//     expect("Content-Type", /json/);
//     expect(response.statusCode).toBe(200);
//   });
// });

// describe("POST /azure/create/virtualnetwork", () => {
//   test("It responds with newly created azure virtual network", async () => {
//     const requestBody = {
//       provider: "azure",
//       "Resource group": "re",
//       "Virtual network name": "k",
//       "Subnet name": "k",
//       "Security group name": "k",
//       "Loadbalancer name": "k",
//       Location: "centralus",
//       "Address Space": "m",
//       token:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
//     };

//     const response = await request(createservices)
//       .post("/azure/create/virtualnetwork")
//       .send(requestBody);

//     expect("Content-Type", /json/);
//     expect(response.statusCode).toBe(200);
//   });
// });

// describe("POST /azure/create/database", () => {
//   test("It responds with newly created azure databse", async function() {
//     const requestBody = {
//       provider: "azure",
//       "Resource group": "k",
//       "Server name": "k",
//       "Database name": "k",
//       "Administrator Login": "k",
//       "Administrator Password": "k",
//       Version: "k",
//       Location: "centralus",
//       token:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
//     };

//     const response = await request(createservices)
//       .post("/azure/create/database")
//       .send(requestBody);

//     expect("Content-Type", /json/);
//     expect(response.statusCode).toBe(200);
//   }, 30000);
// });

describe("POST /aws/create/virtualmachine", () => {
  test("It responds with newly created aws virtual machine", async function() {
    const requestBody = {
      awsType: "ECS",
      provider: "aws",
      "Machine Image Id": "id",
      "Instance Type": "k",
      "Virtual Private Cloud (Network)": "k",
      "Virtual machine name": "k",
      Location: "eu-central-1",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };

    const response = await request(createservices)
      .post("/aws/create/virtualmachine")
      .send(requestBody);

    expect("Content-Type", /json/);
    expect(response.statusCode).toBe(200);
  }, 30000);
});

describe("POST /aws/create/virtualnetwork", () => {
  test("It responds with newly created aws virtual network", async function() {
    const requestBody = {
      provider: "aws",
      Engine: "ECS",
      "Virtual network name": "k",
      "Address Space": "k",
      "Subnet name": "k",
      "Loadbalancer name": "k",
      Location: "eu-central-1",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };

    const response = await request(createservices)
      .post("/aws/create/virtualnetwork")
      .send(requestBody);

    expect("Content-Type", /json/);
    expect(response.statusCode).toBe(200);
  }, 30000);
});

describe("POST /aws/create/database", () => {
  test("It responds with newly created aws databse", async function() {
    const requestBody = {
      awsType: "RDS",
      provider: "aws",
      showSideBar: true,
      "Database name": "k",
      "DB Engine Version": "k",
      "DB Instance Class": "k",
      "Master username": "k",
      "Master password": "k",
      "Virtual Private Cloud (VPC)": "k",
      "Subnet group": "k",
      Location: "us-east-1",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };

    const response = await request(createservices)
      .post("/aws/create/database")
      .send(requestBody);

    expect("Content-Type", /json/);
    expect(response.statusCode).toBe(200);
  }, 30000);
});
