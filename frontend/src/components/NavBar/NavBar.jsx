import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  //

  return (
    <nav className="navbar">
      <ul>
        <li>
          <span>
            <img
              src="/frontend/src/components/Logo/company-logo-noBg.png"
              className="company-logo"
              alt="company-logo"
            />
          </span>
        </li>
        <li>
          <span>
            <Link to="/">Sport</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/">Concert</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/">theater</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/">Search</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
