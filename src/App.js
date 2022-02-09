import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


function App() {
 
  return (
    <div className="App">
      <h1>Todo Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
