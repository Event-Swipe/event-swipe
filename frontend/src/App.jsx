import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Sport from "./components/Sport";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Sport" element={<Sport />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
