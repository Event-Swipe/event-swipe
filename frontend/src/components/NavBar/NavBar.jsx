import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  //

  return (
    <nav className="navbar">
      <img
        src="./frontend/src/components/Logo/LogoEventSwipe.jpg"
        className="company-logo"
        alt="company-logo"
      />
      <ul>
        <NavLink to="/Sport" className="current">
          <li>Sport</li>
        </NavLink>
        <NavLink to="/concert" className="current">
          <li>Concert</li>
        </NavLink>
        <NavLink to="/theater" className="current">
          <li>theater</li>
        </NavLink>
        <NavLink to="/login" className="current">
          <li>LogIn</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
