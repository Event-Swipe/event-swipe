/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import CalendarContext from "../../../contexts/CalendarContext";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [apiReqFormatDate, setApiReqFormatDate] = useState(null);
  const { fetchEvents,
    calendarEvents,
    setCalendarEvents,
    isCalendarSelected,
    setIsCalendarSelected,} = useContext(CalendarContext)
console.log(isCalendarSelected)

  const dateHandler = (date) => {
    setStartDate(date);
    const formattedDate = new Date(date);
    const apiFormatDate = format(formattedDate, "yyyy-MM-dd");
    setApiReqFormatDate(apiFormatDate);
    setIsCalendarSelected(true)
    fetchEvents(apiFormatDate);
};


  //   const fetchByCalendar = (input) => {
  //     // props.validator.setIsCalendarEvent(true);
  //     axios
  //       .get(
  //         `https://api.seatgeek.com/2/events?datetime_utc=${input}&per_page=50&page=1&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
  //       )
  //       .then((response) => setCalendarEvents(response.data.events));
  //   };

  //   useEffect(() => {
  // props.calendarDate(() => {})
  //   }, [calenderEvents])

  //   console.log(calenderEvent);

  return (
    <DatePicker
      isClearable
      placeholderText="I have been cleared!"
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      closeOnScroll={(e) => e.target === document}
      onChange={(date) => dateHandler(date)}
    />
  );
}

export default Calendar;
