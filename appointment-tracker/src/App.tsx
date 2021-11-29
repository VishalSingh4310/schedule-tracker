import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <div className="h-16 flex justify-center items-center bg-main border-b border-gray-700">
        <p className="text-white">Appointment Tracker</p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
