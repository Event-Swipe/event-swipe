/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./Sort.css";

function Sort() {
  const [isSelected, setIsSelected] = useState(true);

  const selectHandler = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <button
      onClick={() => selectHandler()}
      className={isSelected ? "filtering-btn" : "filtering-btn-selected"}
    >
      <i className="pi pi-filter" />
    </button>
  );
}

export default Sort;
