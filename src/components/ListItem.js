import { Link, useParams } from 'react-router-dom';

import Tasks from './Tasks';

const ListItem = ({ lists }) => {
  const { listId } = useParams();
  const list = lists.find(l => String(l.id) === listId); // важно привести к строке

  if (!list) return (
    <>
      <Link to="/" className="text-gray-500 hover:underline flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
        </svg>
        <div>Back to Lists</div>
      </Link>

      <div>List not found</div>
    </>  
  );

  return (
    <>
      <Link to="/" className="text-gray-500 hover:underline flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
        </svg>
        <div>Back to Lists</div>
      </Link>

      <h2 className="text-xl text-left font-bold mb-4">{list.name}</h2>

      < Tasks listId={listId} />
    </>
  );
};

export default ListItem;