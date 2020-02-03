const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const async = require('async');

const nodeCloud = require('nodecloud');
const store = require('../store');
const utils = require('../helpers/utils');


const provider = nodeCloud.getProviders(null);
const vm = provider.azure.compute();

router.delete('/delete', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
    vm.destroy('nodecloud', req.query.id).then((resp) => {
      res = {
        success: true,
        message: `Virtual Machine with ${req.query.id} deleted!`,
      };
      response.json(res);
    });
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('azure/delete/virtualmachine', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('azure/delete/virtualnetwork', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('azure/delete/database', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('aws/delete/virtualmachine', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('aws/delete/virtualnetwork', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('aws/delete/database', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('gcp/delete/virtualmachine', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('gcp/delete/virtualnetwork', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});

router.delete('gcp/delete/database', async (req, response) => {
  if (utils.validateUser(req.headers.token)) {
  } else {
    res = {
      success: false,
      message: 'Invalid token!',
    };
    response.json(res);
  }
});
module.exports = router;
