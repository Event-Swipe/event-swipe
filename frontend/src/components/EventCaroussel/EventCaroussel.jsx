import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper";

import EventCard from "../EventCard/EventCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function EventCaroussel(eventsArr) {
  console.log(eventsArr);
  return (
    <div>
      {/* <h4>Caroussel</h4>
      {selectedEvents && (
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
            selectedEvents.map((selectedEvents) => (
              <SwiperSlide>
                {" "}
                <EventCard selectedEvents={selectedEvents} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}*/}
    </div>
  );
}

export default EventCaroussel;
