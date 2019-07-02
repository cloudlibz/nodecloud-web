let express = require("express");
let router = express.Router();
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let store = require("../store");
let utils = require("../helpers/utils");

router.post("/create", jsonParser, function(req, response) {
  let body = req.body;
  store.signUp(body["email"], body["username"], body["password"]).then(res => {
    let user = res.data;
    res["token"] = utils.generateToken(user);
    response.json(res);
  });
});
