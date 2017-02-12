import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Container from '../../components/Container';
import Header from './Header';
import Nav from './Nav';
import Example from './Example';

const App = ({ children }) => (
  <Container>
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
