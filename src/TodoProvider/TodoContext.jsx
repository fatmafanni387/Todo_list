// TodoContext.js
import React, { createContext, useReducer, useEffect } from 'react';


const initialState = JSON.parse(localStorage.getItem('todos')) || {
  todos: [],
  filter: 'all', // all, active, completed
};
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE":
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "SETFILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}


export const TodoContext = createContext(initialState);


export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
