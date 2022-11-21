/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import EventCard from "../EventCard/EventCard";
import EventsContext from "../../contexts/EventsContext";
import "./EventCaroussel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper";
// import EventCaroussel from "@components/EventCaroussel/EventCaroussel";
function EventCaroussel(props) {
  let selectedEvents;
  let selectedTitle;
  let displayDaily;
  let displaySearch;

  const {
    sportEvents,
    concertEvents,
    theaterEvents,
    dayEvents,
    searchedEvents,
    searchValue,
  } = useContext(EventsContext);
  // console.log(searchValue);
  if (props.sportEvents === true) {
    selectedEvents = sportEvents;
    selectedTitle = "Sports";
  } else if (props.concertEvents === true) {
    selectedEvents = concertEvents;
    selectedTitle = "Concert";
  } else if (props.theaterEvents === true) {
    selectedEvents = theaterEvents;
    selectedTitle = "Theater";
  } else if (props.dayEvents === true) {
    selectedEvents = dayEvents;
    selectedTitle = "Today's Events";
    displayDaily = true;
  }
  useEffect(() => {
    selectedTitle = "Searched Events";
  }, [selectedEvents]);

  return (
    <div>
      {selectedEvents &&
        selectedEvents.map((events) => <EventCard dayEvents={events} />)}
    </div>
  );
}
export default EventCaroussel;
