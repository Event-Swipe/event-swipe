/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "../Filter/Filter.css";

function Sort() {
  const [filterSelected, setFilterSelected] = useState(false);
  const [nameFilterSelected, setNameFilterSelected] = useState(null);

  const options = ["Cheapest first", "Nearest First", "Most Popular First"];

  const selectHandler = (e) => {
    setFilterSelected(true);
    setNameFilterSelected(e.target.value);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setFilterSelected(false)}>
        {" "}
        <i className="pi pi-sort-amount-down " />
      </button>
      <div className="dropdown-content">
        {options.map((option, index) => {
          return (
            <div onClick={(e) => selectHandler(e)} value={option} key={index}>
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sort;
