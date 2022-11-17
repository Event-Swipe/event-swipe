/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./Filter.css";

function Filter() {
  const [isSelected, setIsSelected] = useState(true);

  const selectHandler = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <button
      onClick={() => selectHandler()}
      className={isSelected ? "filtering-btn" : "filtering-btn-selected"}
    >
      <i className="pi pi-sort-amount-down " />
    </button>
  );
}

export default Filter;
