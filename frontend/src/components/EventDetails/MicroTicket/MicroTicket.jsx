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
        {/* <p className="micro-ticket-label">{data.label}</p> */}
        <p className="micro-ticket-value">{data.value}</p>
      </div>
    </div>
  );
}

export default MicroTicket;
