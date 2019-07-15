const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const store = require("../store");
const utils = require("../helpers/utils");

const nodeCloud = require("nodecloud");

const provider = nodeCloud.getProviders(null);
const vm = provider.azure.compute();

const resourceGroupName = "nodecloud";
const vmName = "nodecloud-test-create1";
const publisher = "Canonical";
const offer = "UbuntuServer";
const sku = "14.04.3-LTS";
const params = {
  location: "centralus",
  osProfile: {
    computerName: vmName,
    adminUsername: "ubuntuServer",
    adminPassword: "Pa$$w0rd92"
  },
  hardwareProfile: {
    vmSize: "Basic_A0"
  },
  storageProfile: {
    imageReference: {
      publisher: publisher,
      offer: offer,
      sku: sku,
      version: "latest"
    }
  },
  networkProfile: {
    networkInterfaces: [
      {
        id:
          "/subscriptions/" +
          process.env.AZURE_SUBSCRIPTION_ID +
          "/resourceGroups/nodecloud/providers/Microsoft.Network/networkInterfaces/nodecloud-interface"
      }
    ]
  }
};

router.post("/create/azure/virtualmachine", jsonParser, function(
  req,
  response
) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    vm.createOrUpdate(body.resourceGroupName, body.vmName, params)
      .then(resp => {
        res = {
          success: true,
          message: "Successfully created " + body.vmName + " !"
        };
        response.json(res);
      })
      .then(res => {
        return vm.list(resourceGroupName);
      })
      .then(res => {
        return vm.start(resourceGroupName, vmName);
      })
      .then(res => {
        return vm.reboot(resourceGroupName, vmName);
      })
      .then(res => {
        return vm.stop(resourceGroupName, vmName);
      })
      .then(res => {
        return vm.destroy(resourceGroupName, vmName);
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});
module.exports = router;
