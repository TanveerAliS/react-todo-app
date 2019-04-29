import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Form extends Component {
  static propTypes = {
    handleAddItem: PropTypes.func.isRequired,
  };

  state = { itemText: '', itemDueDate:'' };

  handleSubmitAndResetForm = ev => {
    ev.preventDefault();
    const {itemText, itemDueDate} = this.state
    this.props.handleAddItem({itemText, itemDueDate});

    // Reset value
    return this.setState({
      itemText: '',
      itemDueDate: ''
    });
  };

  handleItemTextChange = ev =>
    this.setState({
      itemText: ev.target.value
    });

  handleItemDueDateChange = ev =>
    this.setState({
      itemDueDate: ev.target.value
    });

    render() {
    return (
      <div>
        <form method="POST" onSubmit={this.handleSubmitAndResetForm}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="new-todo-item"
                name="new-todo-item"
                placeholder="I want to do..."
                aria-label="Todo item description"
                value={this.state.itemText}
                onChange={this.handleItemTextChange}
                autoFocus
              />
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                id="new-todo-item"
                name="new-todo-item"
                placeholder="Due date..."
                aria-label="Due date"
                value={this.state.itemDueDate}
                onChange={this.handleItemDueDateChange}
                autoFocus
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!this.state.itemText || !this.state.itemDueDate}
                aria-label="Add todo item">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
