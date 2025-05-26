//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Lists from './components/Lists';
import AddList from './components/AddList';
import ListItem from './components/ListItem';

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
    <Router>
      <div className="App">
        <div className="my-16 max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8">Todo App</h1>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddList addList={addList} />
                  <Lists lists={lists} deleteTodo={deleteTodo} />
                </>
              }
            />
            <Route path="/lists/:listId" element={<ListItem lists={lists} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
