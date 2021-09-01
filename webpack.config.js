const path = require('path');

module.exports = {
  mode: 'development',
  // entry: {
  //   index: {
  //     import: './src/index.js',
  //     // The dependOn option allows to share the modules between the chunks:
  //     dependOn: 'shared',
  //   },
  //   another: {
  //     import: './src/another-module.js',
  //     dependOn: 'shared',
  //   },
  //   shared: 'lodash',
  // },
  // optimization: {
  //   // https://bundlers.tooling.report/code-splitting/multi-entry/
  //   runtimeChunk: 'single',
  // },
  // entry: {
  //   index: './src/index.js',
  //   another: './src/another-module.js',
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  entry: {
    index: './src/dynamicImporting.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};