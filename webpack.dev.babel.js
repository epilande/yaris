const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.babel');

const config = merge(baseConfig, {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    './src/index',
  ],

  output: {
    publicPath: 'http://0.0.0.0:3000/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'stage-0', 'react', 'react-hmre'],
              plugins: ['styled-components'],
            },
          },
        ],
      },
    ],
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
