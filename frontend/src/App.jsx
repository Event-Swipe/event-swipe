import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import ScrollUpBtn from "./components/ScrollUpBtn/ScrollUpBtn";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import EventList from "./components/EventList/EventList";
import { EventsContextProvider } from "./contexts/EventsContext";
import EventDetails from "./components/EventDetails/EventDetails";

function App() {
  return (
    <>
      <NavBar />
      <EventsContextProvider>
        <Routes>
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/" element={<EventList />} />
          <Route path="/login" element={<Form />} />
        </Routes>
      </EventsContextProvider>
      <Subscribe />
      <Footer />
      <ScrollUpBtn />
    </>
  );
}

export default App;
