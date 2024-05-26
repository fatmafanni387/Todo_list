// TodoForm.js
import React, { useRef, useContext } from 'react';
import { TodoContext } from '../TodoProvider/TodoContext';
import AddIcon from '@material-ui/icons/AddCircle'

 function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const InputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: InputRef.current.value,
      completed: false,
    };
    dispatch({ type: 'ADD', payload: newTodo });
    InputRef.current.value = '';
  };

  return (
    <form className="flex justify-center items-center mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={InputRef}
        className="p-2 border border-gray-300 rounded-lg w-72 mr-2"
        placeholder="Add a new todo"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        <AddIcon/> Add Todo
      </button>
    </form>
  );
}
export default TodoForm;
