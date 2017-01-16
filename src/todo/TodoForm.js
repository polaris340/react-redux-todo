import React, {Component} from 'react';


export class TodoForm extends Component {
  static propTypes = {
    onSubmit: React.PropTypes.func
  };

  render() {
    const {
      onSubmit
    } = this.props;

    return <form onSubmit={e => {
      e.preventDefault();
      (typeof onSubmit === 'function') && onSubmit(this.refs.todoInput.value);
      this.refs.todoInput.value = '';
    }}>
      <input
        ref="todoInput"
        type="text"/>
      <button type="submit">add</button>
    </form>
  }
}


import {connect} from 'react-redux';
import {todoActionCreators} from './todoStore';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: todoText => dispatch(todoActionCreators.addTodo(todoText))
  };
};

const container = connect(
  undefined,
  mapDispatchToProps
)(TodoForm);

export default container;