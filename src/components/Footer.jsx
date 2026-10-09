import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <div className="site-footer-brand">SmartTask</div>
          <p>Built with React by Kajal</p>
        </div>

        <nav aria-label="Footer">
          <Link to="/React-Assessment">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;