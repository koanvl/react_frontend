import {Link} from 'react-router-dom';

const List = ({ id, name, deleteTodo }) => {
  const handleDelete = async () => {
    deleteTodo(id);
  };
 

  return (
    <div className="border rounded p-4 mb-4 flex items-center justify-between gap-4">
      <Link to={`/lists/${id}`} className="block text-blue-600 hover:underline w-full text-left">
        <div className="text-gray-700 p-2">{name}</div>
      </Link>

      <div className="shrink-0">
        <div className="flex items-center gap-4">
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
