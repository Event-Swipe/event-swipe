/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import "./CalendarWrap.css";

function CalendarWrap(props) {
  const [isClicked, setIsClicked] = useState(false);

  const changeHandle = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className="col-con">
      <button
        className={isClicked ? "selected" : "not-selected"}
        onClick={() => {
          changeHandle();
        }}
      >
        <i className="pi pi-calendar" />
      </button>
      {isClicked && <Calendar calendarDate={props.calendarDate} />}
    </div>
  );
}

export default CalendarWrap;
