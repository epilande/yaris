import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from 'actions/counter';
import styles from './Counter.css';

const cx = classNames.bind(styles);

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.animationDone = this.animationDone.bind(this);
    this.state = {
      animating: false,
    };
  }

  decrement() {
    this.props.dispatch(decrement());
  }

  increment() {
    this.setState({ animating: true });
    this.props.dispatch(increment());
  }

  incrementIfOdd() {
    this.props.dispatch(incrementIfOdd());
  }

  incrementAsync() {
    this.props.dispatch(incrementAsync(2000));
  }

  animationDone() {
    this.setState({ animating: false });
  }

  render() {
    const { counter } = this.props;

    const classes = cx({
      base: true,
      animate: this.state.animating,
    });

    return (
      <div className={classes}>
        <button
          className={styles.number}
          onClick={this.increment}
          onMouseUp={this.animationDone}
        >
          <span>{counter}</span>
        </button>
        <div className={styles.actions}>
          <button onClick={this.increment} onMouseUp={this.animationDone}> + </button>
          <button onClick={this.decrement}> – </button>
          <button onClick={this.incrementIfOdd}> odd </button>
          <button onClick={this.incrementAsync}> async </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(Counter);
