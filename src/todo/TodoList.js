import React from 'react';
import TodoItem, {todoShape} from './TodoItem';

const TodoList = ({todos}) => <div>
  {todos.map(todo => <TodoItem
    key={todo.id.toString()}
    todo={todo}/>)}
</div>;

TodoList.propTypes = {
  todos: React
    .PropTypes
    .arrayOf(React.PropTypes.shape(todoShape))
    .isRequired
};


export default TodoList;


import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {

  return {
    todos: state.filter(todo => todo.completed)
  };
};

export const CompletedTodoList = connect(mapStateToProps)(TodoList);

export const NotCompletedTodoList = connect(state => ({
  todos: state.filter(todo => !todo.completed)
}))(TodoList);

export const FilteredTodoList = connect((state, ownProps) => {
  const {completed} = ownProps;

  return {
    todos: state.filter(todo => todo.completed === completed)
  };
})(TodoList);

FilteredTodoList.propTypes = {
  completed: React.PropTypes.bool.isRequired
};