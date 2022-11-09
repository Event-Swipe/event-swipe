import React, { useEffect, useState } from "react";
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
      <NavBar />
      <Form />

      <EventsContextProvider>
        <Routes>
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/" element={<EventList />} />
          <Route path="/login" element={<Form />} />
        </Routes>
      </EventsContextProvider>
      <Subscribe />
      <Footer />

      {offset > 1212 && <ScrollUpBtn />}
    </>
  );
}

export default App;
