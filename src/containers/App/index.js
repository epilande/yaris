import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Container from '../../components/Container';
import Header from './Header';
import Nav from './Nav';
import Example from './Example';

const App = ({ children }) => (
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
      <h1>YARS</h1>
      <p>Yet Another React Starter</p>
    </Header>
    <Nav>
      <ul>
        <li><Link to="/todo" activeClassName="active">Todo</Link></li>
        <li><Link to="/counter" activeClassName="active">Counter</Link></li>
      </ul>
    </Nav>
    <Example>
      {children}
    </Example>
  </Container>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
