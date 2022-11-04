import React from "react";
import "primeicons/primeicons.css";
import "./ScrollUpBtn.css";

function ScrollUpBtn() {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className="btn-container"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <i className="pi pi-chevron-circle-up" />
    </div>
  );
}

export default ScrollUpBtn;
