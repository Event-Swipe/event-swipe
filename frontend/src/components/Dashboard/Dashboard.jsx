import React, { useContext, useState } from "react";
import "primeicons/primeicons.css";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

function Dashboard() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const { userDetails } = useContext(UserContext);

  // eslint-disable-next-line no-restricted-syntax
  console.log(sideMenuIsOpen);
  return (
    <div className="page-wrapper-dashboard">
      <div
        onMouseEnter={() => setSideMenuIsOpen(true)}
        onMouseLeave={() => setSideMenuIsOpen(false)}
        className="sidemenu"
      >
        {!sideMenuIsOpen && <i className=" pi pi-arrow-circle-right" />}
        {sideMenuIsOpen && (
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard/favourites"
          >
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
      <div className="right-side">
        <div className="right-side-top">
          <h3 className="text"> {userDetails.email}</h3>
          <h1 className="text">Good To have you Back!</h1>
        </div>
        <div className="right-side-bottom" />
      </div>
    </div>
  );
}

export default Dashboard;
