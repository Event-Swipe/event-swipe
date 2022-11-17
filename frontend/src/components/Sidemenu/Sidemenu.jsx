/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import "primeicons/primeicons.css";
import "./Sidemenu.css";
import { NavLink } from "react-router-dom";

function Sidemenu() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

  console.log(sideMenuIsOpen);
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

export default Sidemenu;
