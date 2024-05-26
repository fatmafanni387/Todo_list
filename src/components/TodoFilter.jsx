// TodoFilter.js
import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../TodoProvider/TodoContext';

 function TodoFilter() {
  const { state, dispatch } = useContext(TodoContext);
  const { filter } = state;

  const setFltr = useCallback((filter) => {
    dispatch({ type: 'SETFILTER', payload: filter });
  }, [dispatch]);

  return (
    <div className="flex justify-center mb-4">
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => setFltr('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => setFltr('active')}
      >
        Active
      </button>
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => setFltr('completed')}
      >
        Completed
      </button>
    </div>
  );
}
export default TodoFilter;