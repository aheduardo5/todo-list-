import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
// import Formhook from "./components/Formhook";

function App() {
  return (
    <div className="App">
      <h1>Todo Manager</h1> 
      <AddTask />
      <TaskList />
      {/* <Formhook /> */}
    </div>
  );
}

export default App;
