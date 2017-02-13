const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.babel');

const config = merge(baseConfig, {
  devtool: 'source-map',

  entry: {
    app: [
      './src/index',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    publicPath: '/',
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});

module.exports = config;
