import { useState } from "react";

export const TaskHook = () => {
    
  const [taskList, setTasksList] = useState([]);  
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

  const deleteTaskHandler = (taskId) => {
    console.log('Id de la tarea',taskId);
    setTasksList(taskList.filter(task => task.id !== taskId));
  }

  return{
      taskList,
      task,
      taskDataHandler,
      deleteTaskHandler,
      onSubmitHandler
  }
  
}
