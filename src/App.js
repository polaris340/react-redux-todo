import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {FilteredTodoList, CompletedTodoList, NotCompletedTodoList} from './todo/TodoList';
import TodoForm from './todo/TodoForm';
import {Provider} from 'react-redux';

import store from './store';

const App = () => <div className="App">
  <TodoForm />
  <FilteredTodoList completed={false} />
  <hr/>
  <FilteredTodoList completed={true}/>
</div>;

export default () => <Provider store={store}>
  <App/>
</Provider>;
