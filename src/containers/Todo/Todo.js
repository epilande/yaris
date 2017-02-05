import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, editItem, completeItem, clearCompleted } from 'actions/todo';
import List from 'components/List';
import styles from './Todo.css';

class Todo extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
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

    const completedCount = items.reduce((total, item) => (item.completed ? total + 1 : total), 0);

    return (
      <div className={styles.base}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Enter new item"
            onChange={this.onInputChange}
            onKeyDown={this.onInputEnter}
            value={this.state.inputValue}
          />
        </div>
        <List
          items={items}
          onRemove={this.onRemoveItem}
          onEdit={this.onEditItem}
          onComplete={this.onCompleteItem}
        />
        <footer className={styles.footer}>
          <p>{count}</p>
          {
            completedCount
              ? <button onClick={this.onClearCompleted}>Clear Completed</button>
              : ''
          }
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

export default connect(mapStateToProps)(Todo);
