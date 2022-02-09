import { TaskHook } from "../hooks/TaskHook";


const AddTask = () => {
  const {onSubmitHandler, task, taskDataHandler} = TaskHook();
  
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
