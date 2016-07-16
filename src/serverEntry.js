require('babel-register');
const path = require('path');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const basePath = path.resolve(__dirname, '..');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV !== 'production';

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack.isomorphic.tools'))
  .development(__DEV__)
  .server(basePath, function() {
    require('./server');
  });
