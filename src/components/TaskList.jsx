import React from 'react';
import { TaskHook } from '../hooks/TaskHook';
import Task from './Task';

const TaskList = () => {
  const {taskList} =TaskHook()


  return <div>
    {
      taskList.map(task => {
        return(
          <Task key={task.id} task = {task} />
        )
      })
    }
   
  </div>;
};

export default TaskList;
