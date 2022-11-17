import React from "react";
import "./Header.css";

function Header(props) {
  // eslint-disable-next-line react/prop-types
  const { title, image } = props;

  return (
    <div
      className="header-title-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {title === "Today's Events" ? (
        <h1 className="header-title">Find events anywhere & anytime</h1>
      ) : (
        <h1 className="header-title">{title}</h1>
      )}
      {/* <h1 className="header-title">{title}</h1> */}
    </div>
  );
}

export default Header;
