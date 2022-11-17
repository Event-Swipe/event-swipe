import React, { useContext } from "react";
import "./Dashboard.css";
import UserContext from "../../contexts/UserContext";
import Sidemenu from "../Sidemenu/Sidemenu";

function Dashboard() {
  const { userDetails } = useContext(UserContext);


  // eslint-disable-next-line no-restricted-syntax
  console.log(sideMenuIsOpen);

  return (
    <div className="page-wrapper-dashboard">
      <Sidemenu />
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
