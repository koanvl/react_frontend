import { useState, useRef, useEffect } from 'react';
import { update_list } from '../api/endpoints';

const List = ({ id, name, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);
  const inputRef = useRef(null); // 1. ссылка на input

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus(); // 2. фокус при активации редактирования
    }
  }, [isEditing]);

  const handleDelete = async () => {
    deleteTodo(id);
  };

  const handleToggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const handleUpdate = async () => {
    await update_list(id, inputValue);
    setIsEditing(false);
  };

  return (
    <div className="border rounded p-4 mb-4 flex items-center justify-between gap-4">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded w-full"
        />
      ) : (
        <span className="text-gray-700 p-2">{inputValue}</span>
      )}

      <div className="shrink-0">
        <div className="flex items-center gap-4">
          {isEditing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={handleUpdate}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={handleToggleEditing}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-red-600 cursor-pointer"
            onClick={handleDelete}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default List;
