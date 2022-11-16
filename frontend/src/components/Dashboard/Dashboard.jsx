/* eslint-disable import/no-unresolved */
import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="page-wrapper">
      <div className="sidemenu">
        <li>Favourites</li>
        <li>Events Exchange</li>
        <li>Account Settings</li>
      </div>
      <div className="right-side">
        <div className="right-side-top">
          <h1>Good To have you Back!</h1>
        </div>
        <div className="right-side-bottom">
          <img
            src="https://www.animatedimages.org/data/media/1106/animated-cool-sign-image-0020.gif"
            alt="my-gif"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
