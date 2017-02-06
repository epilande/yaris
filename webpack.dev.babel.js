const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.babel');

const config = merge(baseConfig, {
  devtool: 'eval',

  entry: './src/index',

  output: {
    publicPath: '/',
  },

  devServer: {
    hot: true,
    inline: true,
    contentBase: './dist',
    stats: { colors: true },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico',
      inject: true,
    }),
  ],
});

module.exports = config;
