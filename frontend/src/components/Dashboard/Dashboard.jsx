/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import UserContext from "../../contexts/UserContext";
import Sidemenu from "../Sidemenu/Sidemenu";

function Dashboard() {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useContext(UserContext);

  const handleLogout = () => {
    setUserDetails(null);
    navigate("/login");
  };

  return (
    <div className="page-wrapper-dashboard">
      <Sidemenu />
      <div className="right-side">
        <div>
          <button
            className="logout-btn btn btn-outline-light m-2 mb-4"
            onClick={() => handleLogout()}
          >
            Log out
          </button>
        </div>
        <div className="right-side-top">
          {/* <h3 className="text">
            {" "}
            {userDetails.username === null
              ? userDetails.email
              : userDetails.username}
          </h3> */}
          <h1 className="user-greeting">
            Good to have you back{" "}
            <span>
              {userDetails.username === null
                ? userDetails.email
                : userDetails.username}
            </span>
          </h1>
        </div>
        <div className="right-side-bottom" />
      </div>
    </div>
  );
}

export default Dashboard;
