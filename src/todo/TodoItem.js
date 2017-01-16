import React from 'react';
import store from '../store';
import {todoActionCreators} from './todoStore';
import DeleteTodoButton from './DeleteTodoButton';

const TodoItem = ({todo}) => <div>
  <input type="checkbox" checked={todo.completed}
  onChange={e => {
    store.dispatch(todoActionCreators.toggleTodo(todo.id));
  }}
  />
  {todo.text}
  <DeleteTodoButton todoId={todo.id}/>
</div>;

export const todoShape = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
};

TodoItem.propTypes = {
  todo: React.PropTypes.shape(todoShape).isRequired
};

export default TodoItem;