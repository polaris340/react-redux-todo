export const todoActions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

export const todoActionCreators = {
  addTodo: text => ({type: todoActions.ADD_TODO, text}),
  toggleTodo: id => ({type: todoActions.TOGGLE_TODO, id}),
  deleteTodo: id => ({type: todoActions.DELETE_TODO, id})
};

var nextId = 1;

export const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return [
        ...state,
        {
          id: nextId++,
          completed: false,
          text: action.text
        }
      ];
    case todoActions.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    case todoActions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};