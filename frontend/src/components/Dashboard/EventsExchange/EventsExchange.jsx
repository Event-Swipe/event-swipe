/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/order */
import React, { useState, useEffect, useContext } from "react";
import Sidemenu from "../../Sidemenu/Sidemenu";
import "./EventsExchange.css";
import UserContext from "../../../contexts/UserContext";
import EventCard from "../../EventCard/EventCard";

function EventsExchange() {
  const { userDetails, sharedEvents, FetchSharedEvents } =
    useContext(UserContext);

  {
    userDetails !== null &&
      useEffect(() => {
        FetchSharedEvents(userDetails.email);
      }, []);
  }

  return (
    <div className="page-wrapper-dashboard">
      <Sidemenu />
      <div className="fav-cards-con">
        {sharedEvents !== null &&
          sharedEvents.map((event) => {
            return (
              <div className="card-wrap">
                {event.isApproved === 1 && (
                  <h6 className="text-approved">I Wanna Go!</h6>
                )}
                <EventCard
                  dayEvents={event.event}
                  isRemovable
                  removeX={false}
                  token
                  sender={event.sentFrom}
                  addBorder
                />
                <h5 className="text">Suggested By {event.sentFrom}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EventsExchange;
