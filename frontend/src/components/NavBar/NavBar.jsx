/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./NavBar.css";
import { BiMenu } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";
import EventsContext from "../../contexts/EventsContext";
import UserContext from "../../contexts/UserContext";

function NavBar() {
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const { setSearchValue } = useContext(EventsContext);
  const { userDetails } = useContext(UserContext);

  const clearSearch = () => {
    setSearchValue("");
    setShowLinks(false);
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
        {userDetails !== null ? (
          <i onClick={() => navigate("/dashboard")} className="pi pi-user" />
        ) : (
          <NavLink
            onClick={clearSearch}
            to="/login"
            className="currentLoginLink"
          >
            <li>Log in</li>
          </NavLink>
        )}
      </ul>
      <div className="button-div">
        <button
          className="burger-menu-btn"
          onClick={() => setShowLinks(!showLinks)}
        >
          <BiMenu className="menu" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
