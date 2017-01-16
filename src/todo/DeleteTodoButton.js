import React from 'react';
import {todoActionCreators} from './todoStore';

const DeleteTodoButton = ({todoId, children}, {store}) => <button
  onClick={() => store.dispatch(todoActionCreators.deleteTodo(todoId))}
>{children}</button>;

DeleteTodoButton.contextTypes = {
  store: React.PropTypes.object
};

DeleteTodoButton.propTypes = {
  todoId: React.PropTypes.number.isRequired
};

DeleteTodoButton.defaultProps = {
  children: 'x'
};

export default DeleteTodoButton;