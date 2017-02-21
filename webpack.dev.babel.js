const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.babel');

const PORT = process.env.PORT || 3000;

const config = merge(baseConfig, {
  devtool: 'eval',

  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    './src/index',
  ],

  output: {
    publicPath: `http://0.0.0.0:${PORT}/`,
    filename: 'app.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
});

module.exports = config;
