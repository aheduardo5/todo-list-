import React from "react";

const TaskList = ({ TaskList, deleteTaskHandler }) => {
  return <div>{TaskList.map((task) => task.id)
  
  }
  </div>;
};

export default TaskList;
