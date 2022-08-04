import React from 'react'
// import home from "./images/home.png"
// import portfolio from "./images/portfolio.png"
// import art from "./images/art.png"
// import contact from "./images/contact.png"
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className="sidebar">
            <Link to="/" className="nav">HOME</Link>
            <Link to="/portfolio" className="nav">PORTFOLIO</Link>
            <Link to="/art" className="nav">ART</Link>
            <Link to="/contact" className="nav">CONTACT</Link>
        </nav>
    )
}

export default Navbar