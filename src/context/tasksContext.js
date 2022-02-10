import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const tasksContext = createContext({
  taskList: [],
  taskDataHandler: () => {},
  deleteTaskHandler: () => {},
  onSubmit: () => {},
  taskRequiredOptions: {}
});

export const TasksContextProvider = ({ children }) => {
  const contexValue = useTasks();

  return (
    <tasksContext.Provider value={contexValue}>
      {children}
    </tasksContext.Provider>
  )
};
