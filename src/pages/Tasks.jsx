import React, { useState } from 'react'
import tasks from '../data/db'

const Tasks = () => {
    const [task,setTask]=useState('')
    const [data, setData] = useState([])
    
const addTask = (e)=>{
   setData([task,...data])
   setTask("")
}    

const deleteTask =()=>{
    tasks.filter((id)=>(id!=id) )
}
  return (
    <div>
        <h1> + Add New Task</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
            <h3>Task Title</h3> 
             <input type="text"
           
            placeholder='Write Task' 
            onChange={(e)=>setTask( e.target.value)}
            />
            <h3>Category</h3>
            <select name="">
                <option value="study">Study</option>
                <option value="coding">Coding</option>
                <option value="personal">Personal</option>
                <option value="health">Health</option>
            </select>
            <br />
            <h3>Priority</h3>
            <select name="">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <br /><br />
            <button onClick={addTask}>Create Task</button>
        </form>
    {
        data.map((task)=>(
            <div>
                <h2 key={'unique'}>{task}</h2>
                <span><button onClick={deleteTask}>delete</button></span>
                </div>
        ))
       
    }
    </div>
  )
}

export default Tasks