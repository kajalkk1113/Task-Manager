import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import About from './pages/About'
import Footer from './components/Footer'
import tasksData from './data/db'

const App = () => {
  const [data,setData] = useState(tasksData)
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tasks' element={<Tasks data={data} setData={setData}/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App