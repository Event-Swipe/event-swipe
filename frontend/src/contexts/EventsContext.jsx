/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable spaced-comment */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import { useEffect, useState, createContext } from "react";
import axios from "axios";

const EventsContext = createContext();

export default EventsContext;

export const EventsContextProvider = ({ children }) => {
  //creating the states for the variables
  const [dayEvents, setDayEvents] = useState();
  const [weekEvents, setWeekEvents] = useState();
  const [monthEvents, setMonthEvents] = useState();
  const [sportEvents, setSportEvents] = useState();
  const [concertEvents, setConcertEvents] = useState();
  const [theaterEvents, setTheaterEvents] = useState();

  //Fetching data from the API
  const fetchEvents = () => {
    //fetching daily events
    const currentDate = new Date().toISOString().substring(0, 10);

    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc.gt=${currentDate}&per_page=10&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setDayEvents(response.data.events));

    //fetching weekly events
    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc.gte=${currentDate}&datetime_utc.lte=2022-11-04&per_page=10&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setWeekEvents(response.data.events));
    /* 
      //fetching monthly events
    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc=2022-11-04&per_page=10&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setMonthEvents(response.data.events));
    //fetching sports events
    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc=2022-11-04&per_page=10&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setSportEvents(response.data.events));
    //fetching concert events
    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc=2022-11-04&per_page=10&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setConcertEvents(response.data.events));
    //fetching theater events
    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc=2022-11-04&per_page=10&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setTheaterEvents(response.data.events));*/
  };

  //Loading the data
  useEffect(() => fetchEvents, []);

  return (
    <EventsContext.Provider
      value={{
        dayEvents,
        setDayEvents,
        weekEvents,
        setWeekEvents,
        monthEvents,
        setMonthEvents,
        sportEvents,
        setSportEvents,
        concertEvents,
        setConcertEvents,
        theaterEvents,
        setTheaterEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
