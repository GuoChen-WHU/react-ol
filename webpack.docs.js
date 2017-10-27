const path = require('path');

module.exports = function(configs, webpack, ctx) {
  configs.resolve.alias = {
    'react-ol': path.resolve(__dirname, './src/index.js')
  };
};