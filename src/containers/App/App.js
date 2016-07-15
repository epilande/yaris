import React, { PropTypes } from 'react';
import styles from './App.css';

const App = ({ name }) => (
  <div className={styles.base}>
    Hello {name}
  </div>
);

App.propTypes = {
  name: PropTypes.string,
};

export default App;
