import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="logo-wrapper">
        <NavLink to="/">
          <img
            src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
            alt="company-logo"
          />
        </NavLink>
      </div>
      <div className="social-media-wrapper">
        <SocialIcon
          style={{ height: 30, width: 30 }}
          bgColor="#fff"
          url="https://linkedin.com/"
        />
        <SocialIcon className="icon" bgColor="#fff" url="https://github.com/" />
        <SocialIcon
          className="icon"
          bgColor="#fff"
          url="https://facebook.com/"
        />
      </div>
      <div className="links-wrapper">
        <NavLink className="footerLinks" to="/">
          Home
        </NavLink>
        <NavLink className="footerLinks" to="/events/concerts">
          Music
        </NavLink>
        <NavLink className="footerLinks" to="/events/sport">
          Sports
        </NavLink>
        <NavLink className="footerLinks" to="/events/theater">
          Theatre
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
