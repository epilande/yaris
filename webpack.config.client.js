const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools/plugin');

const config = {
  entry: ['./src/client.js'],
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'client.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line
        ],
        // loader: ExtractTextPlugin.extract(
        //   'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' // eslint-disable-line
        // ),
      },
    ],
  },
  plugins: [
    // new ExtractTextPlugin('styles.css'),
    new WebpackIsomorphicTools(require('./webpack.isomorphic.tools')).development(),
  ],
  resolve: {
    root: __dirname,
  },
};

module.exports = config;
