/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import Sidemenu from "../Sidemenu/Sidemenu";

function Dashboard() {
  const [counter, setCounter] = useState(null);
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/share/${userDetails.email}`)
      .then((response) => response.json())
      .then((data) => {
        setCounter(data.length);
      });
  }, []);

  const handleLogout = () => {
    setUserDetails(null);
    navigate("/login");
    localStorage.removeItem("key");
  };

  return (
    <div className="page-wrapper-dashboard">
      <Sidemenu counter={counter} />
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
