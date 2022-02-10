import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const tasksContext = createContext({
  taskList: [],
  task: "",
  taskDataHandler: () => {},
  deleteTaskHandler: () => {},
  onSubmitHandler: () => {}
});

export const TasksContextProvider = ({ children }) => {
  const contexValue = useTasks();

  return (
    <tasksContext.Provider value={contexValue}>
      {children}
    </tasksContext.Provider>
  )
};
