import React, { PropTypes } from 'react';
import styles from './Hello.css';

const Hello = ({ name }) => (
  <div className={styles.base}>
    Hello {name}
  </div>
);

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
