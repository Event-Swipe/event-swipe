/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/Form/AddUser";
import ScrollUpBtn from "./components/ScrollUpBtn/ScrollUpBtn";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import EventList from "./components/EventList/EventList";
import { EventsContextProvider } from "./contexts/EventsContext";
import { CalendarContextProvider } from "./contexts/CalendarContext";
import { UserContextProvider } from "./contexts/UserContext";
import EventDetails from "./components/EventDetails/EventDetails";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <EventsContextProvider>
        <UserContextProvider>
          <NavBar />
          <CalendarContextProvider>
            <Routes>
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/" element={<EventList dayEvents={true} />} />
              <Route
                path="/events/sport"
                element={<EventList sportEvents={true} />}
              />
              <Route
                path="/events/concerts"
                element={<EventList concertEvents={true} />}
              />
              <Route
                path="/events/theater"
                element={<EventList theaterEvents={true} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<AddUser />} />
            </Routes>
          </CalendarContextProvider>
        </UserContextProvider>
      </EventsContextProvider>
      <Subscribe />
      <Footer />
      {offset > 1212 && <ScrollUpBtn />}
    </>
  );
}

export default App;
