import React, { useState } from "react";
import tasksData from "../data/db";

const TaskCard = () => {
  const [data, setData] = useState(tasksData);

  const deleteTask = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div className="box">
      <h1>
        Task Dashboard
        <span>
          <button className="taskList">
            {data.length} Tasks Listed
          </button>
        </span>
      </h1>

      {data.map((task, index) => (
        <div key={task.id} className="taskCard">
          <h3>
            {task.title}
            <span>
              <button className="category">{task.category}</button>
            </span>
          </h3>

          <button
            className="priority"
            style={{
              backgroundColor:
                task.priority === "Low"
                  ? "blue"
                  : task.priority === "Medium"
                  ? "orange"
                  : "red",
              color: "white",
            }}
          >
            Priority: {task.priority}
          </button>

          <button className="status">
            Status: {task.status}
          </button>

          <button>Complete</button>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;