import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import AboutUs from "./routes/home/AboutUs.component";
import Services from "./routes/home/Services.component";
import Map from "./components/Map";
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Services" element={<Services />} />
        <Route path="/Map" element={<Map />} />
      </Route>
    </Routes>
   
  );
}

export default App;