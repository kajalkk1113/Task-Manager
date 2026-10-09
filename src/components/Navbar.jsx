import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
         SmartTask
      </div>

      <div className="navLinks">
        <NavLink to="/React-Assessment">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;