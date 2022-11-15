/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import "./EventCard.css";

function EventCard({ dayEvents }) {
  const title = dayEvents.short_title;
  const subTitle = dayEvents.venue.display_location;
  const imgUrl = dayEvents.performers[0].image;
  const eventHour = Math.floor(Math.random() * (22 - 16)) + 16;
  const eventMinutes = Math.floor(Math.random() * (59 - 30)) + 30;

  return (
    <div key={dayEvents.id}>
      <NavLink to={`/events/${dayEvents.id}`} className="cardLink">
        <div className="eventCardContainer card  w-75 col-sm">
          <img
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt=""
            className="card-img-top img-fluid"
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h6 className="card-subtitle text-muted">
              {subTitle.toUpperCase()}
            </h6>
            <p className="card-text">
              {eventHour}:{eventMinutes}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default EventCard;
