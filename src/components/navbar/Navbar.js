import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="n">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#intro">
            <div className="rainbow-text">Home</div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            <div className="rainbow-text">About</div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            <div className="rainbow-text">Contact</div>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
