import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollUpBtn from "./components/ScrollUpBtn/ScrollUpBtn";
import NavBar from "./components/NavBar/NavBar";
import Sport from "./components/Sport";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import EventList from "./components/EventList/EventList";
import { EventsContextProvider } from "./contexts/EventsContext";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Sport" element={<Sport />} />
      </Routes>
      <EventsContextProvider>
        <EventList />
      </EventsContextProvider>
      <Subscribe />
      <Footer />

      <ScrollUpBtn />
    </>
  );
}

export default App;
