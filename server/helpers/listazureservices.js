const async = require('async');
const nodeCloud = require('nodecloud');
const store = require('../store');
const utils = require('../helpers/utils');


const provider = nodeCloud.getProviders(null);
const vm = provider.azure.compute();
const network = provider.azure.network();
const blob = provider.azure.blob();

const containerName = 'amrita-container';
const resourceGroupName = 'nodecloud';
const params = {
  publicAccessLevel: 'blob',
};

module.exports = {
  getAzureServicesList() {
    new Promise(((resolve, reject) => {
      // return new Promise((resolve, reject) => {
      async.parallel(
        {
          1(callback) {
            vm.list(resourceGroupName).then((res) => {
              if (res.length > 0) {
                callback(null, res);
              } else {
                callback(true, {});
              }
            });
          },
          2(callback) {
            network.list(resourceGroupName).then((res) => {
              if (res.length > 0) {
                callback(null, res);
              } else {
                callback(true, {});
              }
            });
          },
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
        (err, results) => {
          // results is now equals to: {one: 1, two: 2}
          Object.entries(results).map(([param1, param2]) => {
            store.insertService(param2[0]);
          });
          store.serviceList().then((res) => {
            resolve();
          });
        },
      );
      // });
    }));
  },
};
