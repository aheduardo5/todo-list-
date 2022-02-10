import { useContext } from "react";
import { tasksContext } from "../context/tasksContext";
import { useForm } from "react-hook-form";


const AddTask = () => {
  //Context
  const {  onSubmit, taskRequiredOptions } = useContext(tasksContext);
  //useFormHook
  const {handleSubmit, register,  formState: { errors }, reset	} = useForm({
    defaultValues: {
      task: ''
    }
  });


  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="task">Add a new task: </label>
      <input
        id="task"
        placeholder="Add something..."
        {...register("task", taskRequiredOptions)}
      />{errors.task && <div className="error">{errors.task.message}</div>}
      <button>Add Task</button>
    </form>
  </div>
  );
};

export default AddTask;
