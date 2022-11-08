/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UseForm from "./UseForm";
import validateInfo from "./ValidateInfo";
import "./Form.css";

function FormSignUp({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = UseForm(
    validateInfo,
    submitForm
  );

  return (
    <div className="form-content-right">
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <h1>Create you account</h1>
          </div>
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
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
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
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
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
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirm Password
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Confirm you Password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <div>
            <button className="form-input-btn" type="submit">
              Sign Up
            </button>
          </div>
          <div>
            <span className="form-input-login">
              Already have an account? Login <a href="#"> here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSignUp;
