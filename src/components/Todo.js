import { MdDeleteForever } from "react-icons/md";
import { update_todo } from "../api/endpoints";
import { useState } from "react";

const Todo = ({ id, todo_name, deleteTodo, completed }) => {
  const [isChecked, setIsCheked] = useState(completed);
  const handleDelete = async () => {
    deleteTodo(id);
  }

  const handleUpdate = async () => {
    update_todo(id, !isChecked);
    setIsCheked(!isChecked);
  }
  return (
    <div className="max-w-screen-md flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 mx-auto">
    <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
          <input id={`checkbox-${id}`} type="checkbox" value="" checked={isChecked} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-0 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={handleUpdate}/>
          <label htmlFor={`checkbox-${id}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{todo_name}</label>
      </div>
      </div>
      <MdDeleteForever color="#dc2626" size="24" onClick={handleDelete}/>      
    </div>
  </div>
  );
}

export default Todo;