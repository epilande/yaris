import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router/es';
import { syncHistoryWithStore } from 'react-router-redux';
import 'sanitize.css/sanitize.css';
import './styles/global';
import routes from './routes';
import configureStore from './store';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app'),
);
