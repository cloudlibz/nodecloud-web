var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var async = require("async");

var store = require("../store");
var utils = require("../helpers/utils");

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

router.get("/home", function(req, response) {
  async.parallel(
    {
      1: function(callback) {
        vm.list(resourceGroupName).then(res => {
          if (res.length > 0) {
            callback(null, res);
          } else {
            callback(true, {});
          }
        });
      },
      2: function(callback) {
        network.list(resourceGroupName).then(res => {
          if (res.length > 0) {
            callback(null, res);
          } else {
            callback(true, {});
          }
        });
      }
      // 3: function(callback) {
      // blob.list(containerName, params)
      //     .then(res => {
      //         if(res.length > 0){
      //             callback(null, res);
      //         }
      //         else {
      //             callback(true, {});
      //         }
      //     })
      //     },
    },
    function(err, results) {
      // results is now equals to: {one: 1, two: 2}
      Object.entries(results).map(([param1, param2]) => {
        console.log(param2);
        store.insertService(param2[0]);
      });
      store.serviceList().then(res => response.json(res));
    }
  );
  // vm.list(resourceGroupName)
  //     .then(res => {
  //         console.log("computelist",res);
  //         if(res.length > 0){
  //             console.log("inserting into db");
  //             store.insertService(res[0])
  //                 .then(
  //                     res => {
  //                         response.json(res);
  //                     }
  //              );
  //         }
  //         else {
  //             console.log("not inserting into db");
  //         }
  //     })
});

module.exports = router;
