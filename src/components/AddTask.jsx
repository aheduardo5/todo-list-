import React from "react";

const AddTask = ({ task, taskDataHandler, onSubmitHandler }) => {
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="task">Add a new task: </label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={taskDataHandler}
          placeholder="Add something..."
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
