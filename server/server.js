import path from 'path';
import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.babel';
import universalRender from './universalRender';

// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../public')));

// Server Side Rendering
app.use(universalRender);

// start app
app.listen(3000, (error) => {
  if (!error) {
    console.log(`YARIS is running on port: 3000!`); // eslint-disable-line
  }
});

export default app;
