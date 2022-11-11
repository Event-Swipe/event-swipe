/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
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
// import EventCaroussel from "@components/EventCaroussel/EventCaroussel";
function EventList(props) {
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

  return (
    <div>
      {/* <EventCaroussel eventsArr={selectedEvents} /> */}
      <h2 className="ListTitle">{selectedTitle}</h2>
      {/* Displaying only the upcomming daily events */}
      {/*  eslint-disable-next-line no-nested-ternary */}
      {searchValue?.length < 1 || searchedEvents?.length < 1 ? (
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
              selectedEvents.map((events) => (
                <SwiperSlide>
                  {" "}
                  <EventCard dayEvents={events} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ) : searchValue?.length > 0 && searchedEvents ? (
        <div>
          <div className="searchDisplay">
            {searchedEvents?.map((events) => (
              <EventCard dayEvents={events} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
  // STILL MISSING WEEKLY EVENTS
}
export default EventList;
