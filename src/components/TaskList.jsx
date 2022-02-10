import React, {useContext} from 'react';
import { tasksContext } from '../context/tasksContext';
import Task from './Task';

const TaskList = () => {
const {taskList, deleteTaskHandler} = useContext(tasksContext)


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
