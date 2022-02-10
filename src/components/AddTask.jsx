

const AddTask = ({onSubmitHandler, task, taskDataHandler}) => {
  
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
