
import React from 'react'
import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Portfolio from "./Portfolio"
import Art from "./Art"
import Contact from "./Contact"

function App() {
  return (
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/art" element={<Art/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
      </div>
  );
}

export default App;
