import React, { useState } from 'react'
import tasksData from '../data/db'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

const Tasks = ({data,setData}) => {
 
  return (
    <div className='cards'>
    <TaskForm data={data} setData={setData}/>
    <TaskCard data={data} setData={setData}/>
    </div>
  )
}

export default Tasks