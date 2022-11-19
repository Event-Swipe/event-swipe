/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./EventCard.css";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

function EventCard({ dayEvents }) {
  const [isSelected, setIsSelected] = useState(false);
  const { userDetails } = useContext(UserContext);

  const title = dayEvents.short_title;
  const subTitle = dayEvents.venue.display_location;
  const imgUrl = dayEvents.performers[0].image;
  const eventHour = useMemo(
    () => Math.floor(Math.random() * (22 - 16)) + 16,
    []
  );
  const eventMinutes = useMemo(
    () => Math.floor(Math.random() * (59 - 30)) + 30,
    []
  );

  const selectHandler = () => {
    setIsSelected(true);
    axios
      .post(`http://localhost:5000/favourites`, dbObject)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        sucessLogin();
        setAddedUser(true);
      })
      .catch(() => {
        // errorLogin()
      });
  };

  return (
    <div key={dayEvents.id}>
      <NavLink to={`/events/${dayEvents.id}`} className="cardLink">
        <div className="eventCardContainer card">
          <img
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt=""
            className="card-img-top img-fluid"
          />
          <div className="card-body">
            <div>
              <h5 className="card-title">{title}</h5>
              <p className="card-subtitle text-muted">
                {subTitle.toUpperCase()}
              </p>
              <p className="card-text">
                {eventHour}:{eventMinutes}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
      <div>
        <i
          onClick={() => selectHandler()}
          className={isSelected ? "pi pi-heart-fill" : "pi pi-heart"}
        />
      </div>
    </div>
  );
}

export default EventCard;
