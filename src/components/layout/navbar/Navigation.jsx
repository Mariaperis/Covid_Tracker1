import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/favicon.png";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />

        <h2>COVIMAP</h2>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">Prevention</Link>
        </li>

        <li>
          <Link to="/">Qurantine</Link>
        </li>

        <li>
          <Link to="/">Page</Link>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>

        <li>
          <Link to="/">Help</Link>
        </li>

        <li className="tracker-btn">
          <Link to="/tracker">Tracker</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
