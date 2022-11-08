import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="logo-wrapper">
        <img
          src="https://i.postimg.cc/XYtHc1Cq/company-logo-no-Bg.png"
          alt="company-logo"
        />
      </div>
      <div className="social-media-wrapper">
        <SocialIcon bgColor="#fff" url="https://linkedin.com/" />
        <SocialIcon bgColor="#fff" url="https://github.com/" />
        <SocialIcon bgColor="#fff" url="https://facebook.com/" />
      </div>
      <div className="links-wrapper">
        <NavLink className="footerLinks" to="/">
          Home
        </NavLink>
        <NavLink className="footerLinks" to="/music">
          Music
        </NavLink>
        <NavLink className="footerLinks" to="/sports">
          Sports
        </NavLink>
        <NavLink className="footerLinks" to="/theatre">
          Theatre
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
