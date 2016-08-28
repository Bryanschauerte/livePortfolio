var webpack = require('webpack')
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
  app:  [path.resolve('./modules/client.js'), 'babel-polyfill'],
  style: path.join(__dirname, './modules/styles', 'main.scss')},



  output: {
    path: __dirname + '/modules/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader","sass-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader","sass-loader")
       },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "babel-preset-react", "stage-0", require.resolve("babel-preset-es2015")],
          plugins: ["transform-react-constant-elements", "transform-react-inline-elements"]
                },
                exclude: /node_modules/,
              },
            ]
          },
          plugins: [
            new webpack.optimize.CommonsChunkPlugin('client', null, false),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
              compressor: { warnings: false },
            }),
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }),
            // new webpack.optimize.CommonsChunkPlugin("commons", "commons.js", Infinity),
            new ExtractTextPlugin("[name].css")
          ]
        }
