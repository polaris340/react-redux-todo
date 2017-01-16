import {createStore} from 'redux';
import {todoListReducer} from '../todo/todoStore';


const store = createStore(todoListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;