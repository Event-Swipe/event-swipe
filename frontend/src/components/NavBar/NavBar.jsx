/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";
import EventsContext from "../../contexts/EventsContext";

function NavBar() {
  //
  const [showLinks, setShowLinks] = useState(false);
  const { setSearchValue } = useContext(EventsContext);
  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" onClick={clearSearch}>
        <img
          src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
          className="company-logo"
          alt="company-logo"
        />
      </NavLink>
      <SearchBar />
      <ul className="links" id={showLinks ? "hidden" : "none"}>
        <NavLink onClick={clearSearch} to="/events/sport" className="current">
          <li>Sports</li>
        </NavLink>
        <NavLink
          onClick={clearSearch}
          to="/events/concerts"
          className="current"
        >
          <li>Concert</li>
        </NavLink>
        <NavLink onClick={clearSearch} to="events/theater" className="current">
          <li>Theater</li>
        </NavLink>
        <NavLink onClick={clearSearch} to="/login" className="currentLoginLink">
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
