import { useState } from "react";

export const useTasks = () => {
    
  const [taskList, setTasksList] = useState([]);  

  const onSubmit = (data) => {
    console.log(data)
    const newTask = {
      id: crypto.randomUUID(),
      task: data.task
    }
    console.log(newTask)
    setTasksList([...taskList, newTask]);
    console.log(taskList)
  }

  const deleteTaskHandler = (taskId) => {
    console.log('Id de la tarea',taskId);
    setTasksList(taskList.filter(task => task.id !== taskId));
  }

  const taskRequiredOptions = {
    required: {
      value: true,
      message: 'A task is required!'
    }
  }

  return{
      taskList,
      deleteTaskHandler,
      onSubmit,
      taskRequiredOptions
  }
  
}
