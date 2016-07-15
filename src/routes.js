import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App/App.js';
import Todo from './containers/Todo/Todo.js';
import Counter from './containers/Counter/Counter.js';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/todo" />
    <Route path="todo" component={Todo} />
    <Route path="counter" component={Counter} />
  </Route>
);
