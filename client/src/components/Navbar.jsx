import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
            alt="freeCodeCamp.org"
          />
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/signup" className="signup-link">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="login-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
