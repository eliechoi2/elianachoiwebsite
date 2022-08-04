import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Home Page</h1>
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

export default Home;

