import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import CalendarContext from "../../../contexts/CalendarContext";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const { fetchEvents, setIsCalendarSelected } = useContext(CalendarContext);

  const dateHandler = (date) => {
    setStartDate(date);
    const formattedDate = new Date(date);
    const apiFormatDate = format(formattedDate, "yyyy-MM-dd");
    setIsCalendarSelected(true);
    fetchEvents(apiFormatDate);
  };

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
