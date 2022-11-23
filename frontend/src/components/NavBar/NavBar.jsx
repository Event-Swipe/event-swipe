/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useRef } from "react";
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

  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  const clearSearch = () => {
    setSearchValue("");
    setShowLinks(false);
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
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
          /*           onClick={() => setShowLinks(false)}
           */ ref={navButton}
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
        <div
          className="collapse navbar-collapse"
          id="navbarCollapse"
          ref={linksContainerRef}
        >
          <SearchBar />
          <ul
            className="nav-list navbar-nav ms-auto me-2 mb-2 mb-md-0 align-items-center"
            id={showLinks ? "hidden" : "none"}
          >
            <NavLink
              onClick={clearSearch}
              to="/events/sport"
              className="current nav-link fs-5 active"
            >
              <li className="nav-item">Sports</li>
            </NavLink>
            <NavLink
              onClick={clearSearch}
              to="/events/concerts"
              className="current nav-link fs-5 active"
            >
              <li className="nav-item">Concert</li>
            </NavLink>
            <NavLink
              onClick={clearSearch}
              to="events/theater"
              className="current nav-link fs-5 active"
            >
              <li className="nav-item">Theater</li>
            </NavLink>
            {userDetails !== null ? (
              <div className="login-icon">
                <i
                  onClick={() => navigate("/dashboard")}
                  className="pi pi-user"
                />
              </div>
            ) : (
              <NavLink
                onClick={clearSearch}
                to="/login"
                className="currentLoginLink nav-link  fs-5 active"
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
