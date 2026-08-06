import React, { useContext, useState } from "react";

const TaskForm = ({data,setData}) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("High");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id:Date.now(),
      title: task,
      category,
      priority,
      status:"Pending"
    };

    setData([newTask, ...data]);

    setTask("");
    setCategory("Study");
    setPriority("High");
  };


  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>+ Add New Task</h1>

        <p>Task Title</p>

        <input
          type="text"
          value={task}
          placeholder="Write Task"
          onChange={(e) => setTask(e.target.value)}
        />

        <p>Category</p>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Study">Study</option>
          <option value="Coding">Coding</option>
          <option value="Personal">Personal</option>
          <option value="Health">Health</option>
        </select>

        <p>Priority</p>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <br />
        <br />

        <button type="button" onClick={addTask}>
          Create Task
        </button>
      </form>
    </>
  );
};

export default TaskForm;