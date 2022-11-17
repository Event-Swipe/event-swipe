/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "primeicons/primeicons.css";
import "./Favourites.css";
import { NavLink } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";

function Favourites() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const { userDetails } = useContext(UserContext);
  return (
    <div
      onMouseEnter={() => setSideMenuIsOpen(true)}
      onMouseLeave={() => setSideMenuIsOpen(false)}
      className="sidemenu"
    >
      {!sideMenuIsOpen && <i className=" pi pi-arrow-circle-right" />}
      {sideMenuIsOpen && (
        <NavLink style={{ textDecoration: "none" }} to="/dashboard/favourites">
          <li>Favourites</li>
        </NavLink>
      )}
      {sideMenuIsOpen && (
        <NavLink
          style={{ textDecoration: "none" }}
          to="/dashboard/events-exchange"
        >
          <li>Events Exchange</li>
        </NavLink>
      )}
      {sideMenuIsOpen && (
        <NavLink
          style={{ textDecoration: "none" }}
          to="/dashboard/user-settings"
        >
          <li>Account Settings</li>
        </NavLink>
      )}
    </div>
  );
}

export default Favourites;
