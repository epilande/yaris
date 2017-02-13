import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import configureStore from '../src/store';
import routes from '../src/routes';

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();

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
      </head>
      <body>
      <div id="root"><div>${html}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/vendor.js"></script>
        <script src="/app.js"></script>
      </body>
    </html>
  `;
};

const renderError = (err) => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// Server Side Rendering based on routes matched by React-router.
const universalRender = (req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore();

    const initialView = renderToString(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterContext {...renderProps} />
        </ThemeProvider>
      </Provider>,
    );

    return res.set('Content-Type', 'text/html')
      .status(200)
      .end(renderFullPage(initialView, store.getState()));
  });
};

export default universalRender;
