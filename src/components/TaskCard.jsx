import React, { useContext, useState } from "react";

const TaskCard = ({data,setData}) => {
 const deleteTask = (id) => {
    const newData = data.filter((task) => task.id !== id);
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

      {
        data.length===0 ? 
        <p style={{fontSize:'20px',fontWeight:'bolder'}}>No Tasks Available</p>
        :
        data.map((task, index) => (
        <div key={task.id} className= "taskCard">
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
                  ? "#80ade5"
                  : task.priority === "Medium"
                  ? "rgb(247, 198, 107)"
                  : "rgb(210, 137, 137)",
              color:
              task.priority === "Low"
                  ? "rgb(20, 20, 203)"
                  : task.priority === "Medium"
                  ? "rgb(170, 117, 18)"
                  :"rgb(135, 40, 40)",
                   
            }}
          >
            Priority: {task.priority}
          </button>

          <button className="status">
            Status: {task.status}
          </button>
          <hr />
          <button className="complete">Complete</button>

          <button className="delete" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
      
    </div>
  );
};

export default TaskCard;