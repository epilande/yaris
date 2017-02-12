const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.babel');

const config = merge(baseConfig, {
  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  externals: [nodeExternals()],

  entry: [
    './server/index',
  ],

  output: {
    filename: 'server.js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
});

module.exports = config;
