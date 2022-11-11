/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from "react";
import axios from "axios";
// import {dateHandler} from "../components/Calendar/Calendar/Calendar";

const CalendarContext = createContext();
export default CalendarContext;

export function CalendarContextProvider({ children }) {
  const [calendarEvents, setCalendarEvents] = useState(null);
  const [isCalendarSelected, setIsCalendarSelected] = useState(false);

  const fetchEvents = (input) => {
    setIsCalendarSelected(true);
    axios
      .get(
        `https://api.seatgeek.com/2/events?datetime_utc=${input}&per_page=50&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
      )
      .then((response) => setCalendarEvents(response.data.events));
  };

  return (
    <CalendarContext.Provider
      value={{
        fetchEvents,
        calendarEvents,
        setCalendarEvents,
        isCalendarSelected,
        setIsCalendarSelected,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
