import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Formhook = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      task: ""
    },
  });

  const [tasks, setTasks] = useState([]);
  const onSubmit = (data) => {
    const newTask = {
      id: crypto.randomUUID(),
      task: data.task,
    };
    console.log(newTask);
    // setTasks(...tasks,newTask)
    // console.log(tasks)
  };

  const taskRequiredOptions = {
    required: {
      value: true,
      message: 'Task is required'
    },
  }
  return (
    <>
      <h1>Form Hook</h1>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register("task", taskRequiredOptions)} placeholder="Write Something" />
            {errors.task && <div className="error">{errors.task.message}</div>}
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Formhook;
