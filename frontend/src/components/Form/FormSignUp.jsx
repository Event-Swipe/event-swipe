import React from "react";
import UseForm from "./UseForm";

function FormSignUp() {
  const { handleChange, values, handleSubmit } = UseForm();

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create you account</h1>
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
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#"> here</a>
        </span>
      </form>
    </div>
  );
}

export default FormSignUp;
