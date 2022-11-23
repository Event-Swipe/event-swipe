/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-alert */
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
import { useEffect } from "react";
import UserContext from "../../contexts/UserContext";

function EventCard({ dayEvents, isRemovable, removeX}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dbObject, setDbObject] = useState(null);
  const [dbShareObject, setDbShareObject] = useState(null);
  const { userDetails, DeleteFavEvent, PostFavEvent, PostSharedEvent } =
    useContext(UserContext);

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

  useEffect(() => {
    {
      userDetails &&
        setDbObject({
          userId: userDetails.id,
          event: JSON.stringify(dayEvents),
          eventId: dayEvents.id,
        });
    }
  }, [isSelected]);

  function updateShare(e) {
    setDbShareObject({
      userId: userDetails.id,
      receiverEmail: e.target.value,
      oneEvent: JSON.stringify(dayEvents),
      eventId: dayEvents.id,
      senderEmail: userDetails.email,
    });
  }

  const likeHandler = (object) => {
    {
      userDetails !== null && setIsSelected(true);
    }
    {
      userDetails !== null && PostFavEvent(object);
    }
    {
      !userDetails && alert("Only signed users can use this feature");
    }
  };

  const shareHandler = () => {
    setIsShared((prevState) => !prevState);
  };

  const sendToFriend = (e, object) => {
    if (e.key === "Enter") {
      PostSharedEvent(object);
      setIsShared(false);
    }
  };

  return (
    <div
      key={dayEvents.id}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {removeX && (
        <i
          className="pi pi-times"
          onClick={() => DeleteFavEvent(dayEvents.id)}
        />
      )}
      {isHovered && (
        <div className="action-btns">
          <i className="pi pi-eye" />
          <i className="pi pi-trash" />
          <i className="pi pi-check-square" />
        </div>
      )}
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
        {!isRemovable && (
          <>
            <i
              onClick={() => likeHandler(dbObject)}
              className={isSelected ? "pi pi-heart-fill" : "pi pi-heart"}
            />
            <i className="pi pi-share-alt" onClick={() => shareHandler()} />
            {isShared && (
              <input
                type="text"
                placeholder="Friends Email"
                onChange={(e) => updateShare(e)}
                onKeyDown={(e) => sendToFriend(e, dbShareObject)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default EventCard;
