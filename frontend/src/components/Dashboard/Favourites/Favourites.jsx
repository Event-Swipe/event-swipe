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
        const test = JSON.parse(data.oneevent);
        setFavEvents([test]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // console.log(favEvents.oneevent)
  return (
    <div className="page-wrapper-dashboard">
      <Sidemenu />
      <h4 className="text center">Favourites Feature soon to come...</h4>
      {favEvents !== null &&
        favEvents.map((oneEvent) => {
          return <EventCard dayEvents={oneEvent} />;
        })}
    </div>
  );
}

export default Favourites;
