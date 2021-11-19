import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Statistics from "./components/Statistics";
import Map from "./components/Map";
import Infocard from "./components/Infocard";
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  const [infocard, setInfocard] = useState({ location: undefined, airQuality: "", visible: false});
  const [mouseCoords, setMouseCoords] = useState({x: null, y: null});
  

  const getMouseCoords = (e) => {
    setMouseCoords({x: e.clientX, y: e.clientY});
  }

  return (
    <div onMouseDown={(e) => getMouseCoords(e)}className="main-container" >
      
      <Router>
        <Navbar setInfocard={setInfocard} />
        <Infocard visible={infocard.visible} cursorCoords={mouseCoords} location={infocard.location} airQuality={infocard.airQuality} message={infocard.message} />
        <Routes>
          <Route path="/" element={<Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "calc(100vh-10%)" }} />}
            mapElement={<div style={{ height: "100vh" }} />}
            setInfocard={setInfocard}
            infocard={infocard} />}
          />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
