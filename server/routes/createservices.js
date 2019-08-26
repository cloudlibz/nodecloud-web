const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const store = require("../store");
const utils = require("../helpers/utils");

const nodeCloud = require("nodecloud");
const provider = nodeCloud.getProviders(null);
//Virtual Machine
const vm = provider.azure.compute();
// const ncAWS = nodeCloud.getProvider('AWS', process.env.ncconf);
// const options = {
//   apiVersion: '2016-11-15',
// };
// const ec2 = ncAWS.compute(options);
// const ecs = ncAWS.container(options);

//Virtual Network
const network = provider.azure.network();
//Database
const sql = provider.azure.sql();
// const dynamo = ncAWS.nosql(options);
// const rdb = ncAWS.rdbms(options);

//AZURE
router.post("/azure/create/virtualmachine", jsonParser, function(
  req,
  response
) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    const resourceGroupName = body["Resource group"];
    const vmName = body["Virtual machine name"];
    const publisher = "Canonical";
    const offer = "UbuntuServer";
    const sku = "14.04.3-LTS";
    const params = {
      location: body["Location"],
      osProfile: {
        computerName: body["Virtual machine name"],
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
    vm.create(resourceGroupName, vmName, params)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
    res = {
      success: true,
      message: "Success!"
    };
    response.json(res);
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

router.post("/azure/create/virtualnetwork", jsonParser, function(
  req,
  response
) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
    const resourceGroupName = body["Resource group"];
    const networkName = body["Virtual network name"];
    const subnetName = body["Subnet name"];
    const securityGroupName = body["Security group name"];
    const loadBalancerName = body["Loadbalancer name"];
    const params = {
      location: body["Location"],
      addressSpace: {
        addressPrefixes: ["10.0.0.0/16"]
      }
    };

    const securityRuleName = "nodecloud-sec-rule-name";
    const securityRulesParams = {
      location: body["Location"],
      protocol: "Tcp",
      direction: "Inbound",
      priority: 100,
      access: "Allow",
      sourcePortRange: "*",
      destinationPortRange: "*",
      sourceAddressPrefix: "*",
      destinationAddressPrefix: "*"
    };

    const commonParams = {
      location: body["Location"]
    };

    const subnetParams = {
      addressPrefix: "10.0.0.0/24"
    };

    network
      .create(resourceGroupName, networkName, params)
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

router.post("/azure/create/database", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
    const resourceGroupName = body["Resource group"];
    const serverName = body["Server name"];
    const databaseName = body["Database name"];
    const params = {
      administratorLogin: body["Administrator Login"],
      administratorLoginPassword: body["Administrator Password"],
      version: body["Version"],
      location: body["Location"]
    };

    const createDBParams = {
      location: body["Location"]
    };

    sql
      .createOrUpdateDBInstance(resourceGroupName, serverName, params)
      .then(res => {
        console.log("Database Server Created.");
        return sql.createOrUpdateDatabase(
          resourceGroupName,
          serverName,
          databaseName,
          createDBParams
        );
      })
      .then(() => {
        res = {
          success: true,
          message: "Successfully created database!"
        };
        response.json(res);
      })
      .catch(err => {
        console.error(err);
        res = {
          success: false,
          message: err
        };
        response.json(res);
      });
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

//AMAZON WEB SERVICES
router.post("/aws/create/virtualmachine", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    if (body.awsType === "EC2") {
      const params = {
        ImageId: "ami-090f10efc254eaf55",
        InstanceType: "t2.micro",
        MinCount: 1,
        MaxCount: 1
      };
      const instanceParams = {
        Key: "Name",
        Value: program.vmName
      };

      ec2
        .create(params, instanceParams)
        .then(res => {
          console.log(body);
          res = {
            success: true,
            message: "Success!"
          };
          response.json(res);
        })
        .catch(err => {
          console.error(err);
          res = {
            success: false,
            message: err
          };
          response.json(res);
        });
    } else if (body.awsType === "ECS") {
      const params = {
        clusters: ["default"]
      };

      // describe ECS clusters
      ecs
        .describeClusters(params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

router.post("/aws/create/virtualnetwork", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

router.post("/aws/create/database", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
    if (body.awsType === "DynamoDB") {
    }
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

router.post("/aws/create/security", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

//GOOGLE CLOUD PLATFORM
router.post("/gcp/create/virtualmachine", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

router.post("/gcp/create/virtualnetwork", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

router.post("/gcp/create/database", jsonParser, function(req, response) {
  if (utils.validateUser(req.body.token)) {
    const body = req.body;
    console.log(body);
  } else {
    res = {
      success: false,
      message: "Invalid token!"
    };
    response.json(res);
  }
});

module.exports = router;
