import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Sport from "./components/Sport";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import EventList from "./components/EventList/EventList";
import Register from "./components/Form/FormSignUp";

function App() {
  return (
    <>
      <NavBar />
      <Form />
      <Routes>
        <Route path="/Sport" element={<Sport />} />
      </Routes>
      <Routes>
        <Route path="/components/Register/Register" element={<Register />} />
      </Routes>
      <EventList />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
