import React, { PropTypes } from 'react';
import ListItem from 'components/ListItem';
import Ul from './Ul';

const List = ({ items, onRemove, onEdit, onComplete }) => (
  <Ul>
    {items.map(item =>
      <ListItem
        key={item.id}
        item={item}
        onRemove={onRemove}
        onEdit={onEdit}
        onComplete={onComplete}
      />,
    )}
  </Ul>
);

List.defaultProps = {
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default List;
