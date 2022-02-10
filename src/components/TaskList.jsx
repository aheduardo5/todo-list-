import React from 'react';
import Task from './Task';

const TaskList = ({taskList, deleteTaskHandler}) => {


  return <div>
    {
      taskList.map(task => {
        return(
          <Task key={task.id} task = {task} deleteTaskHandler={deleteTaskHandler}/>
        )
      })
    }
   
  </div>;
};

export default TaskList;
