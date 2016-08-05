var webpack = require('webpack')
var path = require('path');
module.exports = {
  entry: './index.js',
  resolve: {
   extensions: ['', '.js', '.jsx'],
   root: [
  path.resolve('./modules')
]
 },
  output: {
    path: 'client',
    filename: 'bundle.js',
    client: '/'
  },
  plugins: process.env.NODE_ENV === 'production' ?
  [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
}),
new webpack.ProvidePlugin({
   'React':     'react'
 })
  ]
  : [
    new webpack.ProvidePlugin({
   'React':     'react'
 })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
