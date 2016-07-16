const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const config = {
  assets: {
    style_modules: {
      extensions: ['css'],
      filter: (module, regex, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
        }
        return regex.test(module.name);
      },
      path: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }
        return module.name;
      },
      parser: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }
        return module.source;
      },
    },
  },
};

module.exports = config;
