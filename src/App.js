import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


function App() {

  const [taskList, setTasksList] = useState([]);
  // Add Task-----------------------
  const [task, setTask] = useState('');
  const taskDataHandler = (e) => setTask(e.target.value);
  


  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!task){
      return console.log('No hay tareas')
    }
    const newTask = {
      id : crypto.randomUUID(),
      task
    }
    setTasksList([...taskList, newTask]);
    setTask('')
    
  }
  // End AddTask---------------------

  const deleteTaskHandler = (taskId) => {
    console.log('Id de la tarea',taskId);
    setTasksList(taskList.filter(task => task.id !== taskId))
  

  }
  
  return (
    <div className="App">
      <h1>Todo Manager</h1>
      <AddTask task = {task} taskDataHandler = {taskDataHandler} onSubmitHandler = {onSubmitHandler}/>
      <TaskList taskList={taskList} deleteTaskHandler={deleteTaskHandler}/>
    </div>
  );
}

export default App;
