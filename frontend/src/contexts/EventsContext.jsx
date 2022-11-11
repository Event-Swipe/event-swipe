/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useEffect, useState, createContext } from "react";
import axios from "axios";

const EventsContext = createContext();
export default EventsContext;
export function EventsContextProvider({ children }) {
  // creating the states for the variables
  const [dayEvents, setDayEvents] = useState();
  const [weekEvents, setWeekEvents] = useState();
  const [sportEvents, setSportEvents] = useState();
  const [concertEvents, setConcertEvents] = useState();
  const [theaterEvents, setTheaterEvents] = useState();

  // creating the states for the search functionality
  const [searchValue, setSearchValue] = useState("");
  const [searchedEvents, setSearchedEvents] = useState();

  // Function to fetch data from the API
  const fetchEvents = () => {
    // Creating the variable for the current date and turning it into a string for the query
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().substring(0, 10);
    // Creating the variable for next week's date and turning it into a string for the query
    const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const nextWeekString = nextWeek.toISOString().substring(0, 10);
    // fetching daily events
    /* per page and number of page are still static
    how do I change it?? */
    axios
      // added sort=score.desc but the first displays are only sports events -> WHYYYYY???
      .get(
        `https://api.seatgeek.com/2/events?sort=score.desc&datetime_utc.gt=${currentDateString}&per_page=50&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setDayEvents(response.data.events));
    // fetching weekly events
    /* per page and number of page are still static
    how do I change it??
    maybe add buttons corresponding of the days os that week and when the user clicks on them it displays
     only events of that day?
    */
    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc.gte=${currentDateString}&datetime_utc.lte=${nextWeekString}&per_page=100&page=5&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => {
        // {...response.data.events}
        setWeekEvents(response.data.events);
      });

    // fetching sports events
    axios
      .get(
        `https://api.seatgeek.com/2/events?taxonomies.name=sports&per_page=100&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setSportEvents(response.data.events));
    // fetching concert events
    axios
      .get(
        `https://api.seatgeek.com/2/events?taxonomies.name=concert&per_page=100&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setConcertEvents(response.data.events));
    // fetching theater events
    axios
      .get(
        `https://api.seatgeek.com/2/events?taxonomies.name=theater&per_page=100&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setTheaterEvents(response.data.events));
  };
  // Function to fecth the searched events
  const fetchSearchedEvents = () => {
    axios
      .get(
        `https://api.seatgeek.com/2/events?q=${searchValue}&per_page=100&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setSearchedEvents(response.data.events));
  };
  //* for each value that has been inserted, save it on a state
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // when the user submits ...
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // console.log(events);
  };

  // Loading the data on mounting
  useEffect(() => fetchEvents, []);

  // when the state changes, update the component
  useEffect(() => {
    fetchSearchedEvents();
  }, [searchValue]);

  return (
    <EventsContext.Provider
      value={{
        dayEvents,
        setDayEvents,
        weekEvents,
        setWeekEvents,
        sportEvents,
        setSportEvents,
        concertEvents,
        setConcertEvents,
        theaterEvents,
        setTheaterEvents,
        searchValue,
        setSearchValue,
        searchedEvents,
        setSearchedEvents,
        handleSearchChange,
        handleSearchSubmit,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
