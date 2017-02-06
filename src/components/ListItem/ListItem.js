import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const RemoveButton = styled.button`
  opacity: 0;
  float: right;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--secondary);
    font-weight: 600;
  }
`;

const Checkbox = styled.input``;

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${Checkbox} {
    margin-right: 1rem;
    outline: 0;
    border: 1px solid color(#433a5a alpha(25%));
    border-radius: 1px;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    appearance: none;
  }

  &::after {
    content: '\\2713';
    position: absolute;
    top: -0.25rem;
    left: 0.0625rem;
    opacity: 0;
    color: color(#433a5a alpha(75%));
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

const InputText = styled.input`
  width: calc(100% - 4rem);
  display: inline-block;
  outline: none;
  letter-spacing: normal;
`;

const DisplayText = styled.div`
  width: calc(100% - 4rem);
  display: inline-block;
  outline: none;
  letter-spacing: normal;
`;

const Item = styled.li`
  padding: 1rem;
  border-bottom: 1px solid color(#433a5a alpha(25%));
  background: #eef3f5;
  color: #433a5a;

  &:hover ${RemoveButton} {
    opacity: 1;
  }
`;

const CompletedItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid color(#433a5a alpha(25%));
  background: #eef3f5;
  color: #433a5a;

  &:hover ${RemoveButton} {
    opacity: 1;
  }

  ${DisplayText} {
    text-decoration: line-through;
    opacity: 0.5;
  }

  ${CheckboxWrapper} {
    ${Checkbox} {
      border-color: color(#433a5a alpha(40%));
    }

    &::after {
      opacity: 1;
    }
  }
`;

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
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
        <CheckboxWrapper
          onClick={this.onCheck}
        >
          <Checkbox
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
          onFocus={this.onFocus}
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
