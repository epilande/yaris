import React, { PropTypes } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import Container from '../../components/Container';
import Counter from '../Counter';
import Todo from '../Todo';
import NotFound from '../NotFound';
import Header from './Header';
import Nav from './Nav';
import Example from './Example';

const App = () =>
  <Container>
    <Helmet
      title="Yet Another React Isomorphic Starter"
      meta={[
        { charset: 'utf-8' },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=9',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ]}
    />
    <Header>
      <h1>YARIS</h1>
      <p>Yet Another React Isomorphic Starter</p>
    </Header>
    <Nav>
      <ul>
        <li>
          <NavLink to="/todo" activeClassName="active">
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" activeClassName="active">
            Counter
          </NavLink>
        </li>
      </ul>
    </Nav>
    <Example>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/todo" />} />
        <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    </Example>
  </Container>;

App.propTypes = {};

export default App;
