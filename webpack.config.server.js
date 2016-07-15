const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.join(__dirname, 'src/server.js'),
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'server.js',
    publicPath: '/build/',
    libraryTarget: 'commonjs2',
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
        loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' // eslint-disable-line
      },
    ],
  },
  resolve: {
    root: __dirname,
  },
};

module.exports = config;
