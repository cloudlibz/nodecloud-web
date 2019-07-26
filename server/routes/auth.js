const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const store = require("../store");
const utils = require("../helpers/utils");

router.post("/signup", jsonParser, function(req, response) {
  const body = req.body;
  store.signUp(body["email"], body["username"], body["password"]).then(res => {
    const user = res.data;
    if (res.success) {
      res["token"] = utils.generateToken(user);
    }
    response.json(res);
  });
});

router.post("/login", jsonParser, function(req, response) {
  const body = req.body;
  store.login(body["username"], body["password"]).then(res => {
    const user = res.data;
    if (res.success) {
      res["token"] = utils.generateToken(user);
    }
    response.json(res);
  });
});

module.exports = router;
