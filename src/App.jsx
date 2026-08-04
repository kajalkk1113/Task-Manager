import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import About from './pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App