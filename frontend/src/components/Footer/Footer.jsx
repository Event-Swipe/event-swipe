import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

function Footer() {
  return (
    <div
      className="footer-wrapper p-4" /* className="d-flex justify-content-between align-items-center" */
    >
      <div className="logo-wrapper">
        <NavLink to="/">
          <img
            src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
            alt="company-logo"
            /* className="w-25" */
            width="130px"
          />
        </NavLink>
      </div>
      <div className="social-media-wrapper d-flex justify-content-center align-items-center">
        <SocialIcon
          bgColor="#fff"
          url="https://www.linkedin.com/in/oren-tal-a4007716a/"
          className="m-1"
        />
        <SocialIcon
          bgColor="#fff"
          url="https://github.com/Event-Swipe/"
          className="m-1"
        />
        <SocialIcon
          bgColor="#fff"
          url="https://www.facebook.com/Google/"
          className="m-1"
        />
      </div>
      <div className="links-wrapper d-flex align-items-center justify-content-evenly">
        <NavLink className="footerLinks m-1 nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="footerLinks m-1 nav-link" to="/events/concerts">
          Music
        </NavLink>
        <NavLink className="footerLinks m-1 nav-link" to="/events/sport">
          Sports
        </NavLink>
        <NavLink className="footerLinks m-1 nav-link" to="/events/theater">
          Theatre
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
