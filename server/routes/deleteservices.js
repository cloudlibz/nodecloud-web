const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const async = require("async");

const store = require("../store");
const utils = require("../helpers/utils");

const nodeCloud = require("nodecloud");

const provider = nodeCloud.getProviders(null);
const vm = provider.azure.compute();
const network = provider.azure.network();
const blob = provider.azure.blob();

const containerName = "amrita-container";
const resourceGroupName = "nodecloud";
const params = {
  publicAccessLevel: "blob"
};

router.delete("/delete", async function(req, response) {
  console.log(req.query.id);
  if (utils.validateUser(req.headers.token)) {
    vm.destroy("nodecloud", req.query.id).then(resp => {
      res = {
        success: true,
        message: "Virtual Machine with " + req.query.id + " deleted!"
      };
      response.json(res);
    });

    // if (req.query.serviceProvider === "azure") {
    // } else if (req.query.serviceProvider === "aws") {
    //   res = {
    //     success: false,
    //     message: "AWS Services are Under development, Please try again later!"
    //   };
    //   response.json(res);
    // } else if (req.query.serviceProvider === "gcp") {
    //   res = {
    //     success: false,
    //     message: "GCP Services are Under development, Please try again later!"
    //   };
    //   response.json(res);
    // }
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});
module.exports = router;
