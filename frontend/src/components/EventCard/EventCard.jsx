/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import "./EventCard.css";

function EventCard({ event }) {
  // let currentDate = new Date();
  // console.log(currentDate.getHours());

  // filter events that have already passed
  // if event date < current date -> display else hide

  //   const title = event.short_title;
  //   const subTitle = event.venue.display_location;
  //   const header = <img src={event.performers[0].image} alt="" />;
  //   const footer = (
  //     <p>
  //       {new Date(event.datetime_utc).getHours()}H
  //       {new Date(event.datetime_utc).getMinutes()}M
  //     </p>
  // );
  return (
    <div key={dayEvents.id}>
      <NavLink to={`/events/${dayEvents.id}`}>
        <div className="eventCardContainer">
          <img
            src={
              imgUrl ||
              "https://files.slack.com/files-pri/T6SG2QGG2-F047D8LH95Y/company-logo-nobg.png"
            }
            alt=""
          />
          <h4>{title}</h4>
          <h6>{subTitle.toUpperCase()}</h6>
          <p>
            {eventHour}:{eventMinutes}
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default EventCard;
