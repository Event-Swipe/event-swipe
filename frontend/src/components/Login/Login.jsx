// import React from "react";
const login = () => {
  return (
    <div>
      login
      <form className="form" id="form-signup">
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your  user email"
            // onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="log-inputs">
          <label htmlFor="password" className="log-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="log-input"
            placeholder="Enter your Password"
            // onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="log-input-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
