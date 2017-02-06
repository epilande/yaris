import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from 'actions/counter';
import styled, { keyframes } from 'styled-components';

const ripple = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, -50%) scale(2.2);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.08);
  }

  30% {
    transform: scale(1.1);
  }

  60% {
    transform: scale(0.85);
  }

  100% {
    transform: scale(1);
  }
`;

const Animating = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  text-align: center;
`;

const Base = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  text-align: center;
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  width: 5.5rem;
  height: 5.5rem;
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  font-size: 2rem;
  border-radius: 50%;
  background: var(--primary);

  ${Animating} & {
    animation: ${pulse} 0.5s ease-out forwards;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.5);
  }

  &::before {
    ${Animating} & {
      background: color(var(--primary) alpha(30%));
      animation: ${ripple} 0.8s cubic-bezier(0.2, 0.7, 0.4, 1) 0.2s forwards;
    }
  }

  &::after {
    ${Animating} & {
      background: color(var(--primary) alpha(70%));
      animation: ${ripple} 0.8s cubic-bezier(0.2, 0.7, 0.4, 1) 0.5s forwards;
    }
  }
`;

const Actions = styled.div`
  button {
    margin: 0.5rem;
    padding: 0.25rem 0.8rem;
    border: 1px solid var(--primary);
    border-radius: 2px;
    color: var(--primary);
    font-weight: 300;

    &:hover {
      background: color(var(--white) alpha(10%));
    }
  }
`;

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
