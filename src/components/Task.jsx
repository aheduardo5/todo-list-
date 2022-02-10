import React, { useContext } from "react";
import { tasksContext } from "../context/tasksContext";

const Task = ({task}) => {
  const { deleteTaskHandler } = useContext(tasksContext);

  return (
    <>
      <p>{task.task}</p>
      <button onClick={() => deleteTaskHandler(task.id)}>Eliminar</button>
    </>
  );
};

export default Task;
