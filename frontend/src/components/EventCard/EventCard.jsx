/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./EventCard.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function EventCard({ dayEvents }) {
  const title = dayEvents.short_title;
  const subTitle = dayEvents.venue.display_location;
  const imgUrl = dayEvents.performers[0].image;
  const eventHour = Math.floor(Math.random() * (22 - 16)) + 16;
  const eventMinutes = Math.floor(Math.random() * (59 - 30)) + 30;

  return (
    <div key={dayEvents.id}>
      {/* <h1>EventCard</h1> */}

      <div className="eventCardContainer">
        <img
          src={
            imgUrl ||
            "https://files.slack.com/files-pri/T6SG2QGG2-F047D8LH95Y/company-logo-nobg.png"
          }
          alt=""
        />
        <h4>{title}</h4>
        <h6>{subTitle.toUpperCase()}</h6>
        <p>
          {eventHour}:{eventMinutes}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
