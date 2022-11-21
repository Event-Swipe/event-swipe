/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function AddUser() {
  const [addedUser, setAddedUser] = useState(null);
  const [addUser, setAddUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const newName = event.target.name;
    const newValue = event.target.value;
    setAddUser({ ...addUser, [newName]: newValue });
  };

  const navigate = useNavigate();

  const handleSubmit = (event, newUser) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/users", newUser)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        sucessLogin();
        setAddedUser(true);
      })
      .catch(() => {
        // errorLogin()
      });
  };

  const sucessLogin = () => {
    document.getElementById("form-signup").reset();
    setTimeout(() => {
      setAddedUser(false);
      navigate("/login");
    }, 2200);
  };
  //   const errorLogin = () => {
  // document.getElementById('form-signup').reset()
  // setTimeout(() => {
  //   setAddedUser(null)
  //   navigate('/login')
  // }, 2200)
  //   }

  return (
    <div className="signUp-page-container">
      <div className="signUp-sideBar p-4">
        <h2 className="signUp-sidebar-title">Start your journey with us</h2>
        <p>Discover events near you</p>
      </div>
      <div className="form-content-right form-container p-4">
        {addedUser && (
          <img
            className="checkmark"
            alt=""
            src="https://media2.giphy.com/media/YlSR3n9yZrxfgVzagm/giphy.gif?cid=ecf05e47y3sxt91qum85ae9iqkx9zf9fk3netpi88xuk7gtl&rid=giphy.gif&ct=s"
          />
        )}
        <h3 className="mb-5">Create your account</h3>
        <form
          className="form"
          id="form-signup"
          onSubmit={(event) => handleSubmit(event, addUser)}
        >
          <div className="form-inputs mb-3">
            <label htmlFor="username" className="form-label form-label">
              User Name
            </label>
            <input
              id="username"
              type="Text"
              name="username"
              className="form-input form-control"
              placeholder="Enter your username"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-inputs mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input form-control"
              placeholder="Enter your email"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-inputs mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input form-control"
              placeholder="Enter your Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* {addedUser === false && <h4>You are already a member mate!</h4>} */}
          <div>
            <button
              type="submit"
              className="form-input-btn btn btn-dark btn-lg mb-3"
            >
              Sign Up
            </button>
          </div>
          <div>
            <span className="form-input-login">
              Already have an account? Login <a href="/login"> here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
