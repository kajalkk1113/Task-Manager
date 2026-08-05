import React, { useState } from 'react'
import tasks from '../data/db'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

const Tasks = () => {
 
  return (
    <div className='cards'>
        <TaskForm/>
    <TaskCard/>
    </div>
  )
}

export default Tasks