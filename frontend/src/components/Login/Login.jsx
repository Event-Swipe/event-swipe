/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import "./Login.css";

// Make a request for a user with a given ID

const login = () => {
  const [userObj, setUserObj] = useState(null);
  const navigate = useNavigate();
  const { LoginFunction, userNotFound } = useContext(UserContext);

  const submitHandler = async () => {
    await LoginFunction(userObj.email, userObj.password);
    navigate("/dashboard");
  };

  const changeHandle = (event) => {
    setUserObj({ ...userObj, [event.target.name]: event.target.value });
  };

  console.log(`user from input${userObj}`);
  return (
    <div className="page-wrapper">
      <div className="right-div"> place for picture</div>
      <div className="left-div">
        <div className="title-wrapper">
          <h1>Welcome Back!</h1>
        </div>
        <div className="instructions-wrapper">
          <strong>Please Enter Your Details</strong>
        </div>
        <div className="field-wrapper">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="field-wrapper">
          <label htmlFor="email" className="form-label">
            Password
          </label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => changeHandle(e)}
          />
        </div>
        {userNotFound === true && <p>Wrong login details</p>}
        <div className="button-wrapper">
          <button onClick={() => submitHandler()}>Login Now!</button>
        </div>
        <div className="signup-link-wrapper">
          <p>
            Don't have an account?<a href="/signup">Sign Up!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
