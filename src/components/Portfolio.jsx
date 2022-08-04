import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
    return (
	    <div>
	    <h1>Portfolio Page</h1>
        <br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/home">Home</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/portfolio">Portfolio</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/contact">Contact Us</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/art">Home</Link>
		</li>
	</ul>
	    </div>
        
    );
};

export default Portfolio;
