/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
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
import CalendarWrap from "../Calendar/CalendarWrap/CalendarWrap";

function EventList(props) {
  const { isCalendarSelected } = useContext(CalendarContext);
  const { calendarEvents } = useContext(CalendarContext);
  console.log(isCalendarSelected);
  console.log(calendarEvents);

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
      {/* Displaying only the upcomming daily events */}
      {/*  eslint-disable-next-line no-nested-ternary */}
      {searchValue?.length < 1 || searchedEvents?.length < 1 ? (
        <>
          <h2 className="ListTitle">{selectedTitle}</h2>
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
        </>
      ) : searchValue?.length > 0 && searchedEvents ? (
        <div>
          <h2 className="ListTitle">Searched Results</h2>
          <div className="searchDisplay">
            {searchedEvents?.map((events) => (
              <EventCard dayEvents={events} />
            ))}
          </div>
        </div>
      ) : null}
      {searchedEvents && (
        <div className="list-styling">
          <div className="title-wrap">
            <h1>More Events</h1>
          </div>
          <div className="calendar-wrap">
            <div className="col">
              <CalendarWrap calendarDate={props.calendarDate} />
            </div>

            <button className="filtering-btn">
              <i className="pi pi-sort-amount-down " />
            </button>
            <button className="filtering-btn">
              <i className="pi pi-filter" />
            </button>
          </div>
          <div className="cal-cards-wrap">
            {calendarEvents &&
              calendarEvents.map((events) => <EventCard dayEvents={events} />)}
          </div>
          <div className="list-items">
            {selectedEvents &&
              selectedEvents.map((events) => <EventCard dayEvents={events} />)}
          </div>
        </div>
      )}
    </div>
  );
}
export default EventList;
