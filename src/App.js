
import React from 'react'
import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Portfolio from "./Portfolio"

function App() {
  return (
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
      </div>
  );
}

export default App;
