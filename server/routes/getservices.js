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

router.get("/home", async function(req, response) {
  console.log("get services called");
  if (utils.validateUser(req.headers.token)) {
    store.deleteList().then(console.log("Delete all called"));
    if (req.query.serviceProvider === "azure") {
      async.parallel(
        {
          1: function(callback) {
            vm.list(resourceGroupName).then(res => {
              console.log("vm", res);
              if (res.length > 0) {
                callback(null, res);
              } else {
                callback(null, {});
              }
            });
          },
          2: function(callback) {
            network.list(resourceGroupName).then(res => {
              console.log("vn", res);
              if (res.length > 0) {
                callback(null, res);
              } else {
                callback(null, {});
              }
            });
          }
          // 3: function(callback) {
          //   blob.list(containerName, params).then(res => {
          //     if (res.length > 0) {
          //       callback(null, res);
          //     } else {
          //       callback(true, {});
          //     }
          //   });
          // }
        },
        function(err, results) {
          // results is now equals to: {one: 1, two: 2}
          Object.entries(results).map(([param1, param2]) => {
            console.log("param", typeof param2);
            console.log("param2[0]", param2[0]);
            if (Object.keys(param2).length !== 0) {
              store.insertService(param2[0]);
            }
          });
          store.serviceList().then(res => response.json(res));
        }
      );
    } else if (req.query.serviceProvider === "aws") {
      res = {
        success: false,
        message: "AWS Services are Under development, Please try again later!"
      };
      response.json(res);
    } else if (req.query.serviceProvider === "gcp") {
      res = {
        success: false,
        message: "GCP Services are Under development, Please try again later!"
      };
      response.json(res);
    }
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});
module.exports = router;
