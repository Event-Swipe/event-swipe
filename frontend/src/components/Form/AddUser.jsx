/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function AddUser() {
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

  /* function UserList() {
    //* create state to store the user
    const [users, setUsers] = useState([]); */

  //* create user handler for fetching user
  // const fetchUsers = () => {
  //   console.log(addUser);
  //   axios
  //     .post("http://localhost:5000/users", addUser)
  //     .then((response) => console.log(response));
  // };

  const handleSubmit = (event, newUser) => {
    event.preventDefault();
    axios.post("http://localhost:5000/users", newUser);
    navigate("/");
  };

  //* use useEffect to fetch users on mounting

  return (
    <div className="form-content-right">
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
        <button type="submit" className="form-input-btn">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#"> here</a>
        </span>
      </form>
    </div>
  );
}

export default AddUser;
