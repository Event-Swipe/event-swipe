/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
import EventCard from "../EventCard/EventCard";
import Header from "../Header/Header";
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
import Filter from "../FilteringBtns/Sort/Sort";
import Sort from "../FilteringBtns/Filter/Filter";

function EventList(props) {
  const { isCalendarSelected } = useContext(CalendarContext);
  const { calendarEvents } = useContext(CalendarContext);

  let selectedEvents;
  let selectedTitle;
  let displayDaily;
  let selectedImg;
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
    selectedImg =
      "https://images.pexels.com/photos/264279/pexels-photo-264279.jpeg?cs=srgb&dl=pexels-pixabay-264279.jpg&fm=jpg&_gl=1*v3xrho*_ga*NDQ5MzY5OTQyLjE2NjMyMzc5NjY.*_ga_8JE65Q40S6*MTY2ODYxNjI4NS4xNi4xLjE2Njg2MTY5ODkuMC4wLjA.https://images.pexels.com/photos/264279/pexels-photo-264279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  } else if (props.concertEvents === true) {
    selectedEvents = concertEvents;
    selectedTitle = "Concert";
    selectedImg =
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  } else if (props.theaterEvents === true) {
    selectedEvents = theaterEvents;
    selectedTitle = "Theater";
    selectedImg =
      "https://images.pexels.com/photos/63328/wells-theatre-norfolk-virginian-seats-63328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  } else if (props.dayEvents === true) {
    selectedEvents = dayEvents;
    selectedTitle = "Today's Events";
    displayDaily = true;
    selectedImg =
      "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg";
  }

  return (
    <div>
      <Header title={selectedTitle} image={selectedImg} />
      {searchValue?.length < 1 || searchedEvents?.length < 1 ? (
        <>
          {selectedTitle === "Today's Events" ? (
            <h2 className="ListTitle mt-4">{selectedTitle}</h2>
          ) : null}
          <div className="listSwiper">
            <Swiper
              centeredSlides
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1025: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              // spaceBetween={30}
              // slidesPerView={3}
              loop
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
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
          {/* <h2 className="ListTitle">Searched Results</h2> */}
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
            <h2 style={{ color: "black" }}>More Events</h2>
          </div>
          <div className="filter-btns-wrap">
            <CalendarWrap calendarDate={props.calendarDate} />
            <Filter />
            <Sort />
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
