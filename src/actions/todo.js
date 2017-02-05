export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

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
