/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./EventDetails.css";
import MapWrap from "./Map/MapWrap";
// eslint-disable-next-line no-unused-vars
import MicroTicket from "./MicroTicket/MicroTicket";

function EventDetails() {
  const [event, setEvent] = useState({
    title: "Dummy-title",
    ticketUrl: "http://www.google.com",
    microTicketsTitles: [
      { label: "price", value: 50, iconStyle: "pi pi-dollar" },
      { label: "date", value: "11.02.2020", iconStyle: "pi pi-clock" },
      { label: "location", value: "New York", iconStyle: "pi pi-home" },
    ],
    price: 50,
    location: "New York",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  });
  return (
    <div className="page-container">
      <img className="event-img" alt="bla" src={event.image} />
      <div className="right-side-page">
        <h1 className="event-title">{event.title}</h1>

        <a href={event.ticketUrl}>
          <button className="buy-tickets-btn">buy tickets</button>
        </a>
        <div className="right-side-bottom-container">
          <div className="event-info-micro-ticket-container">
            {event.microTicketsTitles.map((value) => {
              return <MicroTicket data={value} />;
            })}
          </div>
          <div className="map">
            <MapWrap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
