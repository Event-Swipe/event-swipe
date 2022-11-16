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
    <div className="form-content-right">
      {addedUser && (
        <img
          className="checkmark"
          src="https://media2.giphy.com/media/YlSR3n9yZrxfgVzagm/giphy.gif?cid=ecf05e47y3sxt91qum85ae9iqkx9zf9fk3netpi88xuk7gtl&rid=giphy.gif&ct=s"
        />
      )}
      <h1>Create you account</h1>
      <form
        className="form"
        id="form-signup"
        onSubmit={(event) => handleSubmit(event, addUser)}
      >
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            id="username"
            type="Text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your Password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* {addedUser === false && <h4>You are already a member mate!</h4>} */}
        <button type="submit" className="form-input-btn">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/login"> here</a>
        </span>
      </form>
    </div>
  );
}

export default AddUser;
