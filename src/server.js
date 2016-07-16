/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import Html from './containers/Html';

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (__DEV__) {
      webpackIsomorphicTools.refresh();
    }

    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const component = <RouterContext {...props} />;

      res.send('<!doctype html>\n' +
        renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} />)
      );
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
