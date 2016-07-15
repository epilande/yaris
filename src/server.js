/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '..', 'build')));

function renderPage(html, callback) {
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, file) => {
    if (err) {
      return console.log(err);
    }
    const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
    return callback(document);
  });
}

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />);
      renderPage(appHtml, (document) => {
        res.send(document);
      });
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
