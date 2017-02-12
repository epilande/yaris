const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.babel');

const config = merge(baseConfig, {
  devtool: 'source-map',

  entry: './src/index',

  output: {
    publicPath: '/',
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
              presets: [['es2015', { modules: false }], 'stage-0', 'react'],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});

module.exports = config;
