import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Form from "./components/Form/Form";

import ScrollUpBtn from "./components/ScrollUpBtn/ScrollUpBtn";

import NavBar from "./components/NavBar/NavBar";
import Sport from "./components/Sport";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import EventList from "./components/EventList/EventList";

import Register from "./components/Form/FormSignUp";

import { EventsContextProvider } from "./contexts/EventsContext";
import EventDetails from "./components/EventDetails/EventDetails";

function App() {
  return (
    <>
      <NavBar />
      {/* <Form /> */}
      {/* <Routes>
        <Route path="/Sport" element={<Sport />} />
      </Routes> */}

      <Routes>
        <Route path="/components/Register/Register" element={<Register />} />
      </Routes>

      <EventsContextProvider>
        <Routes>
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/" element={<EventList />} />
        </Routes>
      </EventsContextProvider>

      <Subscribe />
      <Footer />

      <ScrollUpBtn />
    </>
  );
}

export default App;
