import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ListItem.css';

const cx = classNames.bind(styles);

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    onComplete: PropTypes.func,
  };

  constructor(props) {
    super();
    this.onTextClick = this.onTextClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      editing: false,
      text: props.item.text || '',
    };
  }

  onTextClick() {
    this.setState({ editing: true });
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  onCheck() {
    const { item, onComplete } = this.props;

    onComplete(item);
  }

  onRemove() {
    const { item, onRemove } = this.props;
    onRemove(item);
  }

  onEnter(event) {
    const { item } = this.props;

    if (event.which === 13 && item) {
      this.handleSave();
    }
  }

  onBlur() {
    this.handleSave();
  }

  onFocus(event) {
    event.target.select();
  }

  handleSave() {
    const { item, onEdit } = this.props;
    const text = this.state.text.trim();

    this.setState({ editing: false });

    if (!text || text === item.text) {
      this.setState({ text: this.props.item.text });
      return;
    }
    onEdit({ ...item, text });
  }

  render() {
    const { item, onRemove, onComplete } = this.props;
    const { editing } = this.state;

    let checkBox;
    if (onComplete) {
      checkBox = (
        <div
          className={styles.checkbox}
          onClick={this.onCheck}
        >
          <input
            defaultChecked={item.completed}
            type="checkbox"
          />
        </div>
      );
    }

    let removeButton;
    if (onRemove) {
      removeButton = <button className={styles.remove} onClick={this.onRemove}>X</button>;
    }

    let text;
    if (editing) {
      text = (
        <input
          className={styles.itemText}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          onFocus={this.onFocus}
          value={this.state.text}
          autoFocus
        />
      );
    } else {
      text = (
        <div className={styles.itemText} onClick={this.onTextClick}>
          {this.state.text}
        </div>
      );
    }

    const classes = cx({
      item: true,
      completed: item.completed,
    });

    return (
      <li className={classes}>
        {checkBox}{text}{removeButton}
      </li>
    );
  }
}

export default ListItem;
