import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  COMPLETE_ITEM,
  CLEAR_COMPLETED,
} from './constants';

export function addItem(item) {
  return { type: ADD_ITEM, item };
}

export function removeItem(item) {
  return { type: REMOVE_ITEM, item };
}

export function editItem(item) {
  return { type: EDIT_ITEM, item };
}

export function completeItem(item) {
  return { type: COMPLETE_ITEM, item };
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED };
}
