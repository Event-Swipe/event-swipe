/* eslint-disable no-shadow */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
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

function EventList() {
  // using the context
  const { dayEvents } = useContext(EventsContext);

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
          {dayEvents &&
            dayEvents.map((dayEvents) => (
              <SwiperSlide>
                {" "}
                <EventCard dayEvents={dayEvents} />
              </SwiperSlide>
            ))}
        </Swiper>
        {/* Displaying only the upcomming week events */}
      </div>
      {/* <h2 className="ListTitle">This Week's Events</h2> */}
    </div>
  );
}

export default EventList;
