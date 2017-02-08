import React, { PropTypes } from 'react';
import { Link } from 'react-router/es';
import styled from 'styled-components';
import { hexToRgba } from 'styles/utils/color';

const Base = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
`;

const Header = styled.header`
  padding: 4rem 0 2rem;
  text-align: center;

  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    text-align: center;
  }

  li {
    margin: 0.5rem;
    display: inline-block;
  }
`;

const Example = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  width: 100%;
  height: calc(100vh - 250px);
  background: ${props => props.theme.colors.dark};
  box-shadow: 0 1rem 2.5rem 0 ${props => hexToRgba(props.theme.colors.black, 0.2)};
`;

const App = ({ children }) => (
  <Base>
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
  </Base>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
