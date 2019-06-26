const nodeCloud = require("nodecloud");
const provider = nodeCloud.getProviders(null);
const vm = provider.azure.compute();

vm.list(resourceGroupName).then(res => {
  console.log("Hello ams", res);
});
