import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider, ServerStyleSheet } from 'styled-components';
import theme from '../src/styles/theme';
import configureStore from '../src/store';
import App from '../src/containers/App';

const manifest =
  process.env.NODE_ENV === 'production'
    ? require('../public/manifest.json') // eslint-disable-line
    : null;
const chunkManifest =
  process.env.NODE_ENV === 'production'
    ? require('../public/chunk-manifest.json') // eslint-disable-line
    : null;

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();
  const sheet = new ServerStyleSheet();
  const css = sheet.getStyleTags();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}
        <link rel="shortcut icon" href="/favicon.ico" />
        ${css}
      </head>
      <body>
      <div id="root"><div>${html}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          ${chunkManifest
            ? `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>`
            : ''}
        </script>
        ${manifest
          ? `
          <script src='${manifest['/vendor.js']}'></script>
          <script src='${manifest['/app.js']}'></script>
          `
          : `
          <script src="/app.js"></script>
        `}
      </body>
    </html>
  `;
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace =
    process.env.NODE_ENV !== 'production'
      ? `:<br><br><pre style="color:red">${softTab}${err.stack.replace(
          /\n/g,
          `<br>${softTab}`,
        )}</pre>`
      : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// Server Side Rendering based on routes matched by React-router.
const universalRender = (req, res) => {
  const location = req.url;
  const context = {};

  if (context.url) {
    return res.redirect(302, context.url);
  } else {
    const store = configureStore();
    const initialState = store.getState();

    const initialView = renderToString(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StaticRouter location={location} context={context}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      </Provider>,
    );

    return res
      .set('Content-Type', 'text/html')
      .status(200)
      .end(renderFullPage(initialView, initialState));
  }
};

export default universalRender;
