import React from "react";
import logo from "/src/assets/airbnb1.svg";
import "./navbar.css";

var Navbar = () => {
	return (
		<header className="navbar">
			<img src={logo} className="logo"></img>
		</header>
	);
};

export default Navbar;
