var fs = require('fs');
var path = require('path');
var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    path: __dirname + '/dist/',
    filename: 'server.bundle.js',
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          plugins: [
            [
              'babel-plugin-webpack-loaders', {
                'config': './webpack.config.babel.js',
                "verbose": false
              }
            ]
          ]
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, './node_modules/'),
    }),
  ],
};



// var fs = require('fs')
// var path = require('path')
// var webpack = require('webpack')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// module.exports = {
//
//   entry: path.resolve( __dirname, 'server.js' ),
//   resolve: {
//    extensions: ['', '.js', '.jsx'],
//    root: [
//   path.resolve('./modules')
// ]
//  },
//   output: {
//     filename: 'server.bundle.js'
//   },
//   target: 'node',
//   externals: fs.readdirSync( path.resolve( __dirname, 'node_modules' ))
//     .concat([
//       'react-dom/server', 'react/addons',
//     ])
//     .reduce(function (ext, mod) {
//       ext[mod] = 'commonjs ' + mod
//       return ext
//     }, {}),
//   node: {
//     __filename: true,
//     __dirname: true
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production'),
//       }
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//       minChunks: Infinity,
//       filename: 'vendor.js',
//     }),
//     new ExtractTextPlugin('app.[chunkhash].css', { allChunks: true }),
//     new ManifestPlugin({
//       basePath: '/',
//     }),
//     new ChunkManifestPlugin({
//       filename: "chunk-manifest.json",
//       manifestVariable: "webpackManifest",
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compressor: {
//         warnings: false,
//       }
//     }),
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.js$/, exclude: /node_modules/,
//         loader: 'babel-loader?presets[]=es2015&presets[]=react'
//       },
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[hash:base64]&modules&importLoaders=1!postcss-loader'),
//       }, {
//         test: /\.css$/,
//         include: /node_modules/,
//         loaders: ['style-loader', 'css-loader'],
//       }
//     ]
//   }
//
// }
