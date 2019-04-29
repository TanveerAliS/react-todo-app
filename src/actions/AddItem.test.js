import React from 'react';

import { AddItem, ADD_ITEM } from './AddItem';

describe('AddItem', () => {
  it('should call AddItem action', () => {
    const item = {
      itemText: 'Some new todo item',
      dueDate: '22-12-2019'
    }

    const action = {
      type: ADD_ITEM,
      payload: {
        text: item.itemText, dueDate: item.itemDueDate,
      },
    };

    expect(AddItem(item)).toEqual(action);
  });
});
