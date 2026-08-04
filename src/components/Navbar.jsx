import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <NavLink className={'navbar'}>
            <Link to='/'>Home</Link>
            <Link to='/tasks'>Tasks</Link>
            <Link to='/about'>About</Link>
        </NavLink>
    </nav>
  )
}

export default Navbar