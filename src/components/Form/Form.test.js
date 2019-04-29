import React from 'react';

import { shallow } from 'enzyme';

import Form from './Form';

describe('FormEdit', () => {
  let props;

  beforeEach(() => {
    props = {
      itemText: '',
      itemDueDate: '',
      handleAddItem: jest.fn(),
    };
  });

  it('should handle form submission', () => {
    const component = shallow(<Form {...props} />);

    component.find('form').simulate('submit', { preventDefault: jest.fn() });
    const {itemText, itemDueDate} = props
    expect(props.handleAddItem).toHaveBeenCalledWith({itemText, itemDueDate});
  });

  it('should handle form submission with a new input field value', () => {
    const value = 'someNewValue';

    const component = shallow(<Form {...props} />);

    component.find('form').simulate('submit', { preventDefault: jest.fn() });
    const {itemText, itemDueDate} = props

    expect(props.handleAddItem).toHaveBeenCalledWith({itemText, itemDueDate});

  });
});
