const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    // 资源托管路径
    // webpack-dev-server serves bundled files from the directory defined in output.path, 
    // i.e., files will be available under http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // http://localhost:3000/pub 可访问
    publicPath: '/pub',
    // clean the /dist folder before each build
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ]
};