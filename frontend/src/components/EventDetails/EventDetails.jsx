/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";
import MapWrap from "./Map/MapWrap";
import MicroTicket from "./MicroTicket/MicroTicket";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const [microTickets, setMicroTickets] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.seatgeek.com/2/events/${id}?client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
    )
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
        setMicroTickets([
          {
            label: "Price",
            value: data.stats.median_price,
            iconStyle: "pi pi-dollar",
          },
          {
            label: "Date",
            value: data.datetime_local,
            iconStyle: "pi pi-clock",
          },
          { label: "Venue", value: data.venue.name, iconStyle: "pi pi-home" },
        ]);
      });
  }, []);

  return (
    <div className="page-container">
      {event === null ? (
        <div>Loading..</div>
      ) : (
        <>
          <img
            className="event-img"
            alt="bla"
            src={event.performers[0].image}
          />
          <div className="right-side-page">
            <h1 className="event-title">{event.title}</h1>

            <a href={event.url}>
              <button className="buy-tickets-btn">buy tickets</button>
            </a>
            <div className="right-side-bottom-container">
              <div className="event-info-micro-ticket-container">
                {microTickets.map((value) => {
                  return <MicroTicket data={value} />;
                })}
              </div>
              <div className="map">
                <MapWrap data={event} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default EventDetails;
