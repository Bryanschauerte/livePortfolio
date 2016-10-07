var webpack = require('webpack')
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
  app:  ['babel-polyfill', path.resolve('./modules/client.js')],
  style: path.join(__dirname, './modules/styles', 'main.scss')},



  output: {
    path: __dirname + '/modules/__build__/',
    filename: '[name].js',
    chunkFilename: '[name].js'
    // , this led to a webjson not found 404 error on request to server...
    // publicPath: '/__build__/'
  },
  extensions: [
       '',
       '.jsx', '.js'
   ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
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
            // new webpack.optimize.CommonsChunkPlugin('client', null, false),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
              compressor: { warnings: false },
            }),
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }),
            new webpack.optimize.CommonsChunkPlugin("app", "app.js"),
            new ExtractTextPlugin("[name].css")
          ],
          postcss: function() {
            return [autoprefixer({
              browsers: ['last 3 versions']
            })];
          }
        }
