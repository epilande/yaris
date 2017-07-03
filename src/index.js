import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css/sanitize.css';
import theme from './styles/theme';
import './styles/global';
import configureStore from './store';
import App from './containers/App';

import '!file-loader?name=[name].[ext]!./assets/favicon.ico'; // eslint-disable-line

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
