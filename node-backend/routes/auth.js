var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var store = require("../store");
var utils = require("../helpers/utils");

router.post("/signup", jsonParser, function(req, response) {
  var body = req.body;
  store.signUp(body["email"], body["username"], body["password"]).then(res => {
    var user = res.data;
    res["token"] = utils.generateToken(user);
    response.json(res);
  });
});

router.post("/login", jsonParser, function(req, response) {
  var body = req.body;
  store.login(body["username"], body["password"]).then(res => {
    var user = res.data;
    res["token"] = utils.generateToken(user);
    response.json(res);
  });
});

module.exports = router;
