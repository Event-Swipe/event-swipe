/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  //
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img
          src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
          className="company-logo"
          alt="company-logo"
        />
      </NavLink>
      <SearchBar />
      <ul className="links" id={showLinks ? "hidden" : "none"}>
        <NavLink to="/events/sport" className="current">
          <li>Sports</li>
        </NavLink>
        <NavLink to="/events/concerts" className="current">
          <li>Concert</li>
        </NavLink>
        <NavLink to="events/theater" className="current">
          <li>Theater</li>
        </NavLink>
        <NavLink to="/login" className="current LoginLink">
          <li>Log in</li>
        </NavLink>
        {/* <NavLink to="/search" className="current">
          <li>Search</li>
        </NavLink> */}
      </ul>
      <button
        className="burger-menu-btn"
        onClick={() => setShowLinks(!showLinks)}
      >
        <BiMenu className="menu" />
      </button>
    </nav>
  );
}

export default NavBar;
