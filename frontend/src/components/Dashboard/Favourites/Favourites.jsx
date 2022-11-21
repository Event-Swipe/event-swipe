/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useContext } from "react";
import Sidemenu from "../../Sidemenu/Sidemenu";
import "./Favourites.css";
import UserContext from "../../../contexts/UserContext";
import EventCard from "../../EventCard/EventCard";

function Favourites() {
  const [favEvents, setFavEvents] = useState(null);

  const { userDetails } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/favourites/${userDetails.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const arr = [];
        const processData = data.map((event) => {
          const parsedEvent = JSON.parse(event.oneevent);
          const parsedObj = {
            id: event.id,
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
      <h4 className="text center">Favourites Feature soon to come...</h4>
      {favEvents !== null &&
        favEvents.map((event) => {
          return <EventCard dayEvents={event.event} isRemovable />;
        })}
    </div>
  );
}

export default Favourites;
