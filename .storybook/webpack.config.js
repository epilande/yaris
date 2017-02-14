const devConfig = require('../webpack.dev.babel');

module.exports = storybookBaseConfig => (
  Object.assign({}, storybookBaseConfig, {
    resolve: {
      modulesDirectories: devConfig.resolve.modules,
    },
    module: Object.assign({}, storybookBaseConfig.module, {
      loaders: storybookBaseConfig.module.loaders.concat(devConfig.module.rules),
    }),
  })
);
