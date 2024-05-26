// App.js
import React from 'react';
import { TodoProvider } from './TodoProvider/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';


function App() {
  return (
    <TodoProvider>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
          My Todo List
        </h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
