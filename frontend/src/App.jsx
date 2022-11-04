import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollUpBtn from "./components/ScrollUpBtn/ScrollUpBtn";
import NavBar from "./components/NavBar/NavBar";
import Sport from "./components/Sport";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import EventList from "./components/EventList/EventList";
import EventDetails from "./components/EventDetails/EventDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Sport" element={<Sport />} />
      </Routes>
      <EventList />
      <Subscribe />
      <Footer />



      <ScrollUpBtn />

    </>
  );
}

export default App;
