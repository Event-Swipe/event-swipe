import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Sport from "./components/Sport";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Sport" element={<Sport />} />
      </Routes>
    </>
  );
}

export default App;
