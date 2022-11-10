/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useContext } from "react";
import EventCard from "../EventCard/EventCard";
import EventsContext from "../../contexts/EventsContext";
import "./EventList.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import EventCaroussel from "@components/EventCaroussel/EventCaroussel";

function EventList(props) {
  let selectedEvents;
  let selectedTitle;
  let displayDaily;
  if (props.sportEvents === true) {
    const { sportEvents } = useContext(EventsContext);
    selectedEvents = sportEvents;
    selectedTitle = "Sports";
  } else if (props.concertEvents === true) {
    const { concertEvents } = useContext(EventsContext);
    selectedEvents = concertEvents;
    selectedTitle = "Concert";
  } else if (props.theaterEvents === true) {
    const { theaterEvents } = useContext(EventsContext);
    selectedEvents = theaterEvents;
    selectedTitle = "Theater";
  } else if (props.dayEvents === true) {
    const { dayEvents } = useContext(EventsContext);
    selectedEvents = dayEvents;
    selectedTitle = "Today's Events";
    displayDaily = true;
  }

  return (
    <div>
      {/* <EventCaroussel eventsArr={selectedEvents} /> */}
      <h2 className="ListTitle">{selectedTitle}</h2>
      {/* Displaying only the upcomming daily events */}
      {displayDaily ? (
        <div className="listSwiper">
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
      ) : (
        <div className="listContainer">
          {selectedEvents &&
            selectedEvents.map((dayEvents) => (
              <EventCard dayEvents={dayEvents} />
            ))}
        </div>
      )}
    </div>
  );
  // STILL MISSING WEEKLY EVENTS
}

export default EventList;
