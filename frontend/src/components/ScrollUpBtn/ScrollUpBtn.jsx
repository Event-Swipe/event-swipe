/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "primeicons/primeicons.css";
import "./ScrollUpBtn.css";
import Draggable from "react-draggable";

function ScrollUpBtn() {
  const [isDragged, setIsDragged] = useState(false);

  function dragHandler(e) {
    if (e.type === "mousemove" || e.type === "touchmove") {
      setIsDragged(true);
    }
    if (e.type === "mouseup" || e.type === "touchmove") {
      setTimeout(() => {
        setIsDragged(false);
      }, 100);
    }
  }

  function scrollHandler() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Draggable onDrag={(e) => dragHandler(e)} onStop={(e) => dragHandler(e)}>
      <div
        onClick={() => (isDragged ? undefined : scrollHandler())}
        className="btn-container"
      >
        <i className="pi pi-chevron-circle-up" />
      </div>
    </Draggable>
  );
}

export default ScrollUpBtn;
