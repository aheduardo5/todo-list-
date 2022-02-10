import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const {
    deleteTaskHandler,
    taskList,
    onSubmitHandler,
    task,
    taskDataHandler
  } = useTasks();

  return (
    <div className="App">
      <h1>Todo Manager</h1>
      <AddTask
        onSubmitHandler={onSubmitHandler}
        task={task}
        taskDataHandler={taskDataHandler}
      />
      <TaskList taskList={taskList} deleteTaskHandler={deleteTaskHandler} />
    </div>
  );
}

export default App;
