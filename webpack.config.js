const path = require('path');

module.exports = function(configs, webpack, ctx) {
  configs.output = {
    path: path.resolve(__dirname, './dist'),
    filename: 'react-ol.min.js',
    library: 'react-ol',
    libraryTarget: 'umd'
  };

  configs.externals = [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      ol: {
        root: 'ol',
        commonjs2: 'ol',
        commonjs: 'ol',
        amd: 'ol',
      }
    }
  ];
};