import React, { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("High");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      title: task,
      category,
      priority,
    };

    setData([newTask, ...data]);

    setTask("");
    setCategory("Study");
    setPriority("High");
  };

  const deleteTask = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
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

      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>Category: {item.category}</p>
          <p>Priority: {item.priority}</p>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TaskForm;