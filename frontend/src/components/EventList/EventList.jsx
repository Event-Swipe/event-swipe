/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useContext } from "react";
import EventCard from "../EventCard/EventCard";
// import { Card } from "primereact/card";
import "./EventList.css";

function EventList() {
  // Create a state to store the data
  const [events, setEvents] = useState();

  // Getting data from the API
  const fetchEvents = () => {
    axios
      .get(
        "https://api.seatgeek.com/2/events?per_page=50&page=3&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz"
      )
      .then((response) => setEvents(response.data.events));
  };

  function EventList(props) {
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
      <div>
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
      </div>
    );
  }
}

export default EventList;
