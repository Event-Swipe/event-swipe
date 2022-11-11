/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useContext, useState } from "react";
import EventCard from "../EventCard/EventCard";
import EventsContext from "../../contexts/EventsContext";
import CalendarContext from "../../contexts/CalendarContext";
import "./EventList.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import NoCarouselEventList from "../NoCarouselEventList/NoCarouselEventList";

function EventList(props) {
  const { dayEvents } = useContext(EventsContext);
  const { isCalendarSelected } = useContext(CalendarContext);
  const { calendarEvents } = useContext(CalendarContext);
  console.log(isCalendarSelected);
  console.log(calendarEvents);

  let selectedEvents;
  if (props.sportEvents === true) {
    const { sportEvents } = useContext(EventsContext);
    selectedEvents = sportEvents;
  } else if (props.concertEvents === true) {
    const { concertEvents } = useContext(EventsContext);
    selectedEvents = concertEvents;
  } else if (props.theaterEvents === true) {
    const { theaterEvents } = useContext(EventsContext);
    selectedEvents = theaterEvents;
  } else if (props.dayEvents === true) {
    const { dayEvents } = useContext(EventsContext);
    selectedEvents = dayEvents;
  }

  return (
    <div className="listContainer">
      {/*  FILTERING EVENTS BEFORE CURRENT HOUR */}

      <h2 className="ListTitle">Today's Events</h2>
      <div>
        {/* Displaying only the upcomming daily events */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop
          loopFillGroupWithBlank
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {selectedEvents &&
            selectedEvents.map((dayEvents) => (
              <SwiperSlide>
                {" "}
                <EventCard dayEvents={dayEvents} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="list-wrap">
        <NoCarouselEventList
          calendarDate={() => setCalendarDateChoice()}
          events={calendarEvents !== null ? calendarEvents : selectedEvents}
        />
      </div>
    </div>
  );
}

export default EventList;
