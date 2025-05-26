import { useState, useEffect } from 'react';

import AddTask from './AddTask';

import Task from './Task';

import { get_tasks, create_task } from '../api/endpoints';

const Tasks = ({listId}) => {
   const [tasks, setTasks] = useState([]);
  
   useEffect(() => {
    if (!listId) return;
    const fetchTasks = async () => {
      const tasks = await get_tasks(listId);
      setTasks(tasks);
    };
    fetchTasks();
  }, [listId]);
  
    const addTask = async (listId, task_name) => {
      const task = await create_task(listId, task_name);
      setTasks([task, ...tasks]);
    }
  return (
    <div className="tasks">
      < AddTask addTask={addTask} listId={listId} />
      <div>     
      {tasks.map((task) => (        
        <Task key={task.id} id={task.id} name={task.title}/>
      ))}
    </div>
    </div>
  );
}

export default Tasks;