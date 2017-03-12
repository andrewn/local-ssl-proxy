var proxy = require("./dist/bundle").proxy;

module.exports = function (config) {
  // TODO: Check if this is a config of named configs
  //       or just a single config
  return proxy(config, {});
};
