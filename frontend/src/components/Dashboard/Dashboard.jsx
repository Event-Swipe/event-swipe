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
        <button className="logout-btn" onClick={() => handleLogout()}>
          Log out
        </button>
        <div className="right-side-top">
          <h3 className="text"> {userDetails.username}</h3>
          <h1 className="text">Good To have you Back!</h1>
        </div>
        <div className="right-side-bottom" />
      </div>
    </div>
  );
}

export default Dashboard;
