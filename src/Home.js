import React from 'react'
import './index.css';
import background from "./images/bg.jpg"
import Navbar from "./Navbar"
function Home() {
    return(
    <div className="bg" style={{backgroundImage: `url(${background}`}}>
      <h1 className="name">ELIANA CHOI</h1>
      <h3 className="subheading"><em>FRONT-END DEVELOPER | UI DESIGNER | ILLUSTRATOR</em></h3>
      <Navbar/>
    </div>
    )
}

export default Home