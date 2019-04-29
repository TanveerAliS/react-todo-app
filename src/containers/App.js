import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { default as AppLayout } from '../components/Layout/App';

import { AddItem } from '../actions/AddItem';
import { CancelEditItem } from '../actions/CancelEditItem';
import { DeleteItem } from '../actions/DeleteItem';
import { EditItem } from '../actions/EditItem';
import { ItemCompletion } from '../actions/ItemCompletion';
import { SelectEditItem } from '../actions/SelectEditItem';
import { LoadStateLocalStorage } from '../actions/LoadStateLocalStorage';
import { SaveStateLocalStorage } from '../actions/SaveStateLocalStorage';
import { ReorderItem } from '../actions/ReorderItem';
import { FilterItems } from '../actions/FilterItems';

const appPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
  handleLoadStateLocalStorage: PropTypes.func.isRequired,
  handleSaveStateLocalStorage: PropTypes.func.isRequired,
  handleReorderItem: PropTypes.func.isRequired,
};

class App extends Component {
  componentDidMount = () => this.props.handleLoadStateLocalStorage();
  componentDidUpdate = () => this.props.handleSaveStateLocalStorage(this.props.items);

  handleAddItem = itemValue => this.props.handleAddItem(itemValue);
  handleCancelEditItem = () => this.props.handleCancelEditItem();
  handleDeleteItem = selectedItemId => this.props.handleDeleteItem(selectedItemId);
  handleEditItem = modifiedItem => this.props.handleEditItem(modifiedItem);
  handleItemCompletion = modifiedItem => this.props.handleItemCompletion(modifiedItem);
  handleSelectEditItem = id => this.props.handleSelectEditItem(id);
  handleReorderItem = (initialPosition, newPosition) => this.props.handleReorderItem(initialPosition, newPosition);
  handleFilter = filterName => this.props.handleFilter(filterName);

  render() {
    return <AppLayout {...this.props} />;
  }
}

const filterTodos = (state) => {
  return state.todos.items.filter(item => {
    if (state.todos.activePage === 'Completed') {
      return item.completed === true;
    } else if (state.todos.activePage === 'Trash') {
      return item.trashed === true;
    } else if (state.todos.activePage === 'Home') {
      return item.completed === false && item.trashed === false;
    }  
  })
}
const mapStateToProps = state => {
  return ({
    items: filterTodos(state),
    editingItem: state.todos.editingItem,
    activePage: state.todos.activePage
  })
};

const mapDispatchToProps = {
  handleAddItem: AddItem,
  handleCancelEditItem: CancelEditItem,
  handleDeleteItem: DeleteItem,
  handleEditItem: EditItem,
  handleItemCompletion: ItemCompletion,
  handleSelectEditItem: SelectEditItem,
  handleSaveStateLocalStorage: SaveStateLocalStorage,
  handleLoadStateLocalStorage: LoadStateLocalStorage,
  handleReorderItem: ReorderItem,
  handleFilter: FilterItems
};

App.propTypes = appPropTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
