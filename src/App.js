//import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import { useState } from 'react';
import { useEffect } from 'react';
import { get_todos, create_todo, delete_todo, get_lists } from './api/endpoints';

function App() {

  const [todos, setTodos] = useState([]);
  const [lists, setLists] = useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos);
      console.log(todos);
    };
    fetchTodos();
  }
  , []);

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await get_lists();
      setLists(lists);
      console.log(lists);
    };
    fetchLists();
  }
  , []);

  const addTodo = async (todo_name) => {
    const todo = await create_todo(todo_name);
    setTodos([todo, ...todos]);
  }

  const deleteTodo = async (id) => {
    await delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <div className="my-16 max-w-screen-lg mx-auto">
        
        <h1 className="text-3xl font-bold mb-8">
          Todo App
        </h1>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
