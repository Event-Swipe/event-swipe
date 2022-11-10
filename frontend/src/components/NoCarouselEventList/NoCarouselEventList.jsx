/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useContext } from "react";
import EventCard from "../EventCard/EventCard";
import EventsContext from "../../contexts/EventsContext";
import "./NoCarouselEventList.css";
import CalendarWrap from "@components/Calendar/CalendarWrap/CalendarWrap";

function NoCarouselEventList(props) {
  return (
    <div className="listContainer">
      <CalendarWrap calendarDate={props.calendarDate} />
      <div className="list-wrap">
        {props.events &&
          props.events.map((dayEvents) => <EventCard dayEvents={dayEvents} />)}
      </div>
    </div>
  );
}

export default NoCarouselEventList;
