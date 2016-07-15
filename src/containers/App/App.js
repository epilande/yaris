import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './App.css';

const App = ({ children }) => (
  <div className={styles.base}>
    <ul>
      <li><Link to="/todo">Todo</Link></li>
      <li><Link to="/counter">Counter</Link></li>
    </ul>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
