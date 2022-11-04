/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

function NavBar() {
  //
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar">
      <img
        src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
        className="company-logo"
        alt="company-logo"
      />
      <ul className="links" id={showLinks ? "hidden" : "none"}>
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
      // eslint-disable-next-line react/button-has-type
      <button className="burger-menu-btn" onClick={() => setShowLinks(!showLinks)}>
        <BiMenu className="menu" />
      </button>
    </nav>
  );
}

export default NavBar;
