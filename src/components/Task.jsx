import React from 'react'
import { TaskHook } from '../hooks/TaskHook'

const Task = ({task}) => {
  const {deleteTaskHandler} = TaskHook()
  return (
    <>
    <p>{task.task}</p>
    <button onClick={() => deleteTaskHandler(task.id)}>Eliminar</button>
    </>
  )
}

export default Task