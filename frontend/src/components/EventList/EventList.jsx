import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../EventCard/EventCard";
// import { Card } from "primereact/card";
import "./EventList.css";

function EventList() {
  // Create a state to store the data
  const [events, setEvents] = useState();

  // Getting data from the API
  const fetchEvents = () => {
    axios
      .get(
        "https://api.seatgeek.com/2/events?per_page=50&page=3&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz"
      )
      .then((response) => setEvents(response.data.events));
  };

  // Loading the data
  useEffect(() => fetchEvents, []);
  // console.log({ ...events });

  return (
    <div>
      {/*  FILTERING EVENTS BEFORE CURRENT HOUR */}
      <h1 className="listTitle">Daily Events</h1>
      <div className="listContainer">
        {events &&
          events.map((event) => {
            return (
              new Date(event.datetime_utc).getHours() >
                new Date().getHours() && <EventCard event={event} />
            );
          })}
      </div>
      {/* DISPLAYING ONLY EVENTS OF THE CURRENT WEEK */}
      {/* <h2>FilterByWeek</h2> */}

      {/* MAPPING ALL EVENTS */}
      {/* <h1>EventList</h1>
      {events ? events.map((event) => <EventCard event={event} />) : null} */}
    </div>
  );
}

export default EventList;
