let express = require("express");
let router = express.Router();
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let store = require("../store");
let utils = require("../helpers/utils");

router.post("/signup", jsonParser, function(req, response) {
  let body = req.body;
  store.signUp(body["email"], body["username"], body["password"]).then(res => {
    let user = res.data;
    res["token"] = utils.generateToken(user);
    response.json(res);
  });
});

router.post("/login", jsonParser, function(req, response) {
  let body = req.body;
  store.login(body["username"], body["password"]).then(res => {
    let user = res.data;
    res["token"] = utils.generateToken(user);
    response.json(res);
  });
});

module.exports = router;
