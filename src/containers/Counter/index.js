import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import { increment, decrement, incrementIfOdd, incrementAsync } from './actions';
import Animating from './Animating';
import Button from './Button';
import CircleButton from './CircleButton';

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

    let Wrapper = Container;
    if (this.state.animating) {
      Wrapper = Animating;
    }

    return (
      <Wrapper center>
        <CircleButton
          onClick={this.increment}
          onMouseUp={this.animationDone}
        >
          <span>{counter}</span>
        </CircleButton>
        <div>
          <Button onClick={this.increment} onMouseUp={this.animationDone}> + </Button>
          <Button onClick={this.decrement}> – </Button>
          <Button onClick={this.incrementIfOdd}> odd </Button>
          <Button onClick={this.incrementAsync}> async </Button>
        </div>
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
