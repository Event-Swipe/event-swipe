/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./NavBar.css";
// import { BiMenu } from "react-icons/bi";
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
    <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
      <div className="container-fluid">
        <NavLink to="/" onClick={clearSearch} className="navbar-brand">
          <img
            src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
            className="company-logo"
            alt="company-logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <SearchBar />
          <ul
            className="nav-list navbar-nav ms-auto me-2 mb-2 mb-md-0"
            id={showLinks ? "hidden" : "none"}
          >
            <NavLink
              onClick={clearSearch}
              to="/events/sport"
              className="current nav-link active"
            >
              <li className="nav-item">Sports</li>
            </NavLink>
            <NavLink
              onClick={clearSearch}
              to="/events/concerts"
              className="current nav-link active"
            >
              <li className="nav-item">Concert</li>
            </NavLink>
            <NavLink
              onClick={clearSearch}
              to="events/theater"
              className="current nav-link active"
            >
              <li className="nav-item">Theater</li>
            </NavLink>
            {userDetails !== null ? (
              <i
                onClick={() => navigate("/dashboard")}
                className="pi pi-user"
              />
            ) : (
              <NavLink
                onClick={clearSearch}
                to="/login"
                className="currentLoginLink nav-link active"
              >
                <li className="nav-item">Log in</li>
              </NavLink>
            )}
          </ul>
        </div>
        {/* <div className="button-div">
          <button
            className="burger-menu-btn"
            onClick={() => setShowLinks(!showLinks)}
          >
            <BiMenu className="menu" />
          </button>
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
