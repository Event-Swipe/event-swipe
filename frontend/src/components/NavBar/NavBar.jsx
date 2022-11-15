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
    <nav className="navbar navbar-expand-sm d-flex justify-content-evenly">
      <NavLink to="/" onClick={clearSearch} className="navbar-brand ">
        <img
          src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
          className="company-logo"
          alt="company-logo"
          height="100px"
        />
      </NavLink>
      <SearchBar />
      <div className="collapse navbar-collapse">
        <ul
          className="links navbar-nav me-auto mb-2 mb-lg-0"
          id={showLinks ? "hidden" : "none"}
        >
          <NavLink
            onClick={clearSearch}
            to="/events/sport"
            className="current nav-link"
          >
            <li className="nav-item">Sports</li>
          </NavLink>
          <NavLink
            onClick={clearSearch}
            to="/events/concerts"
            className="current nav-link"
          >
            <li className="nav-item">Concert</li>
          </NavLink>
          <NavLink
            onClick={clearSearch}
            to="events/theater"
            className="current nav-link"
          >
            <li className="nav-item">Theater</li>
          </NavLink>
          <NavLink
            onClick={clearSearch}
            to="/login"
            className="current LoginLink nav-link"
          >
            <li>Log in</li>
          </NavLink>
          {/* <NavLink to="/search" className="current">
          <li>Search</li>
        </NavLink> */}
        </ul>
      </div>
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
