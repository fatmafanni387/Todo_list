// TodoList.js
import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../TodoProvider/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { state } = useContext(TodoContext);
  const { todos, filter } = state;

  const filterTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <ul className="list-none p-0">
      {filterTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
