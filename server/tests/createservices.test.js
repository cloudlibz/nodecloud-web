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
        console.log(res);
        done();
      });
  });
});

describe("POST /azure/create/virtualmachine", () => {
  it("It responds with newly created azure virtual machine", function(done) {
    const requestBody = {
      provider: "azure",
      "Resource group": "l",
      "Virtual machine name": "ol",
      Location: "centralus",
      "OS Type": "linux",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };

    request
      .post("/azure/create/virtualmachine")
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res);
        done();
      });
  });
});

describe("POST /azure/create/virtualnetwork", () => {
  it("It responds with newly created azure virtual network", function(done) {
    const requestBody = {
      provider: "azure",
      "Resource group": "re",
      "Virtual network name": "k",
      "Subnet name": "k",
      "Security group name": "k",
      "Loadbalancer name": "k",
      Location: "centralus",
      "Address Space": "m",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };

    request
      .post("/azure/create/virtualnetwork")
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res);
        done();
      });
  });
});

describe("POST /azure/create/database", () => {
  it("It responds with newly created azure databse", function(done) {
    const requestBody = {
      provider: "azure",
      "Resource group": "k",
      "Server name": "k",
      "Database name": "k",
      "Administrator Login": "k",
      "Administrator Password": "k",
      Version: "k",
      Location: "centralus",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0YWNoYXR1cnZlZGk5N0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcml0YSIsImlhdCI6MTU2NDU0NjgwOSwiZXhwIjoxNTk2MDgyODA5fQ.CiUxyaSewlYcBzJCgULUynZKTZPg6kWdhORukxVrgtI"
    };

    request
      .post("/azure/create/database")
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res);
        done();
      });
  });
});

describe("POST /aws/create/virtualmachine", () => {
  it("It responds with newly created aws virtual machine", function(done) {
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

    request
      .post("/aws/create/virtualmachine")
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res);
        done();
      });
  });
});

describe("POST /aws/create/virtualnetwork", () => {
  it("It responds with newly created aws virtual network", function(done) {
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

    request
      .post("/aws/create/virtualnetwork")
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res);
        done();
      });
  });
});

describe("POST /aws/create/database", () => {
  it("It responds with newly created aws database", function(done) {
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

    request
      .post("/aws/create/database")
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res);
        done();
      });
  });
});
