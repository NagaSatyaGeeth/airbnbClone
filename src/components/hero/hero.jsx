import React from "react";
import "./hero.css";
import img28 from "/src/assets/Group 77.png";

var Hero = () => {
	return (
		<section className="hero">
			<img className="img28" src={img28} alt="img" />
			<div className="exp">
				<div className="exp-heading">Online Experiences</div>
				<div className="exp-desc">
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</div>
			</div>
		</section>
	);
};

export default Hero;
