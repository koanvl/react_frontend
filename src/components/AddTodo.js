import { useState } from 'react';

const AddTodo = ({addTodo}) => {

  const [input, setInput] = useState("");

  const handleAdd = () =>  {
    addTodo(input);
    setInput('');
  }

  return (
    <div className="flex items-center gap-4 mb-8 max-w-screen-md mx-auto">
      <input type="text" id="todo_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a new todo" value={input} onChange={(e) => setInput(e.target.value)} />
      <button 
      className="shrink-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={handleAdd}>
        Add Todo
      </button>
    </div>
  )
}
export default AddTodo;