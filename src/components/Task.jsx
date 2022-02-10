import React from 'react'


const Task = ({task, deleteTaskHandler}) => {
  return (
    <>
    <p>{task.task}</p>
    <button onClick={() => deleteTaskHandler(task.id)}>Eliminar</button>
    </>
  )
}

export default Task