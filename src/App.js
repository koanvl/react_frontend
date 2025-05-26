//import logo from './logo.svg';
import './App.css';

import Lists from './components/Lists';
import AddList from './components/AddList';

import { get_lists, create_list, delete_list } from './api/endpoints';

import { useState, useEffect } from 'react';

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await get_lists();
      setLists(lists);
    }
    fetchLists();
  }, [])

  const addList = async (list_name) => {
    const list = await create_list(list_name);
    setLists([list, ...lists]);
  }

  const deleteTodo = async(id) => {
    await delete_list(id);
    setLists(lists.filter((list) => list.id !== id));
  }
  
  return (
    <div className="App">
      <div className="my-16 max-w-md mx-auto">
        
        <h1 className="text-3xl font-bold mb-8">
          Todo App
        </h1>
        < AddList addList={addList} />
        <Lists lists={lists} deleteTodo={deleteTodo} />      
      </div>
    </div>
  );
}

export default App;
