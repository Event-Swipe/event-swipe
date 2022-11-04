/* eslint-disable react/prop-types */
import React from "react";
import "./MicroTicket.css";
import "primeicons/primeicons.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
function MicroTicket({ data }) {
  // eslint-disable-next-line no-restricted-syntax
  console.log(data);
  return (
    <div className="micro-ticket">
      <i className={data.iconStyle} />
      <div className="micro-ticket-titles">
        <p>{data.label}</p>
        <p>{data.value}</p>
      </div>
    </div>
  );
}

export default MicroTicket;
