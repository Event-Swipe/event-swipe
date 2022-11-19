/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./Filter.css";

function Filter() {
  const [filterSelected, setFilterSelected] = useState(false);
  const options = [
    "Day Event",
    "Night Event",
    "Free Event",
    "$20 Max",
    "$50 Max",
  ];

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setFilterSelected(false)}>
        {" "}
        <i className="pi pi-filter " />
      </button>
      <div className="dropdown-content">
        {options.map((option) => {
          return <div value={option}>{option}</div>;
        })}
      </div>
    </div>
  );
}

export default Filter;
