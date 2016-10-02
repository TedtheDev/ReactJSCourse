//HTML Webpack Plugin config
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

//webpack modules, entry, output
module.exports = {
  entry: [
    './app/index.js'
  ],
  modules: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },

  //plugins
  plugins: [HTMLWebpackPluginConfig]
};
