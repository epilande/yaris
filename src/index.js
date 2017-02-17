import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css/sanitize.css';
import theme from './styles/theme';
import './styles/global';
import routes from './routes';
import configureStore from './store';

import '!file-loader?name=[name].[ext]!./assets/favicon.ico'; // eslint-disable-line

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history} routes={routes} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line
}
