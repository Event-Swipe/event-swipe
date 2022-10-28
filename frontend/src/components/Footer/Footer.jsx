import React from "react";
import { Link } from "react-router-dom";
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
        <SocialIcon url="https://linkedin.com/" />
        <SocialIcon url="https://github.com/" />
        <SocialIcon url="https://facebook.com/" />
      </div>
      <div className="links-wrapper">
        <Link to="/">Home</Link>
        <Link to="/music">Music</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/theatre">Theatre</Link>
      </div>
    </div>
  );
}

export default Footer;
