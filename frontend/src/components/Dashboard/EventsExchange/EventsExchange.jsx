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
  const [favEvents, setFavEvents] = useState(null);

  const { userDetails } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/share/${userDetails.email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const arr = [];
        const processData = data.map((event) => {
          const parsedEvent = JSON.parse(event.event);
          const parsedObj = {
            event: parsedEvent,
          };
          arr.push(parsedObj);
        });

        setFavEvents(arr);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="page-wrapper-dashboard">
      <Sidemenu />
      <div className="fav-cards-con">
        {favEvents !== null &&
          favEvents.map((event) => {
            return <EventCard dayEvents={event.event} isRemovable />;
          })}
      </div>
    </div>
  );
}

export default EventsExchange;
