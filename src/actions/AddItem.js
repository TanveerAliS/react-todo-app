export const ADD_ITEM = 'Add item';

export const AddItem = item => ({
  type: ADD_ITEM,
  payload: { text: item.itemText, dueDate: item.itemDueDate},
});
