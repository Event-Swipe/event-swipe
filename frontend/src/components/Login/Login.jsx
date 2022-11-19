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
  const { LoginFunction, userNotFound, setUserNotFound, userDetails } =
    useContext(UserContext);

  const submitHandler = async () => {
    await LoginFunction(userObj.email, userObj.password);
  };
  if (userDetails !== null) {
    navigate("/dashboard");
  }
  const changeHandle = (event) => {
    setUserNotFound(false);
    setUserObj({ ...userObj, [event.target.name]: event.target.value });
  };

  return (
    <div className="page-wrapper">
      <div className="right-div">
        <img
          src="https://i.pngimg.me/thumb/f/720/cc547231bc044e9c899c.jpg"
          alt="login-cover"
        />
      </div>
      <div className={userNotFound ? "wrong-details" : "left-div"}>
        <div className="title-wrapper">
          <h1 className="text">Welcome Back!</h1>
        </div>
        <div className="instructions-wrapper mb-3">
          <strong className="text">Please enter your details bellow</strong>
        </div>
        <div className="field-wrapper mb-3">
          <label htmlFor="email" className="form-label text ">
            Email Address
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="field-wrapper mb-3">
          <label htmlFor="email" className="form-label text">
            Password
          </label>
          <input
            className="form-control"
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => changeHandle(e)}
          />
        </div>
        {userNotFound === true && (
          <h4 className="wrong-details-msg text">Wrong login details</h4>
        )}
        <div className="button-wrapper mb-4">
          <button className="btn btn-light" onClick={() => submitHandler()}>
            Login Now!
          </button>
        </div>
        <div className="signup-link-wrapper">
          <p className="text">
            Don't have an account?
            <button className="btn btn-sm btn-outline-light ms-2 p-2">
              {" "}
              <a href="/signup" className="text">
                Sign Up!
              </a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
