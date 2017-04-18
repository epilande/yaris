import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import List from '../../components/List';
import Input from '../../components/Input';
import InputContainer from './InputContainer';
import Footer from './Footer';
import {
  addItem,
  removeItem,
  editItem,
  completeItem,
  clearCompleted,
} from './actions';

class Todo extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      items: PropTypes.array,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputEnter = this.onInputEnter.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  onInputEnter(event) {
    const item = event.target.value.trim();

    if (event.which === 13 && item) {
      this.props.dispatch(addItem(item));
      this.setState({ inputValue: '' });
    }
  }

  onRemoveItem(item) {
    this.props.dispatch(removeItem(item));
  }

  onEditItem(item) {
    this.props.dispatch(editItem(item));
  }

  onCompleteItem(item) {
    this.props.dispatch(completeItem(item));
  }

  onClearCompleted() {
    this.props.dispatch(clearCompleted());
  }

  render() {
    const { todo: { items } } = this.props;

    let count = items.length || null;
    if (count) {
      count = `${count} ${count > 1 ? 'items' : 'item'}`;
    }

    const completedCount = items.reduce(
      (total, item) => (item.completed ? total + 1 : total),
      0,
    );

    return (
      <Container>
        <InputContainer>
          <Input
            placeholder="Enter new item"
            onChange={this.onInputChange}
            onKeyDown={this.onInputEnter}
            value={this.state.inputValue}
          />
        </InputContainer>
        <List
          items={items}
          onRemove={this.onRemoveItem}
          onEdit={this.onEditItem}
          onComplete={this.onCompleteItem}
        />
        <Footer>
          <p>{count}</p>
          {completedCount
            ? <button onClick={this.onClearCompleted}>Clear Completed</button>
            : ''}
        </Footer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

export default connect(mapStateToProps)(Todo);
