import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from 'actions/counter';
import Actions from './Actions';
import Animating from './Animating';
import Base from './Base';
import Button from './Button';

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

    let Wrapper = Base;
    if (this.state.animating) {
      Wrapper = Animating;
    }

    return (
      <Wrapper>
        <Button
          onClick={this.increment}
          onMouseUp={this.animationDone}
        >
          <span>{counter}</span>
        </Button>
        <Actions>
          <button onClick={this.increment} onMouseUp={this.animationDone}> + </button>
          <button onClick={this.decrement}> – </button>
          <button onClick={this.incrementIfOdd}> odd </button>
          <button onClick={this.incrementAsync}> async </button>
        </Actions>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(Counter);
