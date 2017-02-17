import React, { Component, PropTypes } from 'react';
import RemoveButton from './RemoveButton';
import DisplayText from './DisplayText';
import CheckboxWrapper from './CheckboxWrapper';
import InputText from './InputText';
import Item from './Item';
import CompletedItem from './CompletedItem';

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      text: PropTypes.string,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
  };

  constructor(props) {
    super();
    this.onTextClick = this.onTextClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onBlur = this.onBlur.bind(this);
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
        <CheckboxWrapper
          onClick={this.onCheck}
        >
          <input
            defaultChecked={item.completed}
            type="checkbox"
          />
        </CheckboxWrapper>
      );
    }

    let removeButton;
    if (onRemove) {
      removeButton = <RemoveButton onClick={this.onRemove}>X</RemoveButton>;
    }

    let text;
    if (editing) {
      text = (
        <InputText
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          onFocus={event => event.target.select()}
          value={this.state.text}
          autoFocus
        />
      );
    } else {
      text = (
        <DisplayText onClick={this.onTextClick}>
          {this.state.text}
        </DisplayText>
      );
    }

    if (item.completed) {
      return (
        <CompletedItem>
          {checkBox}{text}{removeButton}
        </CompletedItem>
      );
    }

    return (
      <Item>
        {checkBox}{text}{removeButton}
      </Item>
    );
  }
}

export default ListItem;
