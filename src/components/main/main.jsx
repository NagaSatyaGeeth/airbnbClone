import React from "react";
import ReactDOM from "react-dom";
import App from "../Navbar/Navbar";
import Hero from "../hero/hero";
import Cards from "../Cards/card";
import "./main.css";
import swimmerImg from "/src/assets/image 12.png";
import weddingpic from "/src/assets/wedpic.png";
import bike from "/src/assets/mounbike.png";

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<>
		<App />
		<Hero />
		<section className="cards-wrapper">
			<Cards
				status="SOLD OUT"
				img={swimmerImg}
				rating="5.0"
				noOfReviews="(6)"
				country="USA"
				cardTitle="Life lessons with katie"
				price="$136"
			/>
			<Cards
				status="ONLINE"
				img={weddingpic}
				rating="5.0"
				noOfReviews="(30)"
				country="USA"
				cardTitle="Learn wedding photography"
				price="$125"
			/>
			<Cards
				status="ONLINE"
				img={bike}
				rating="4.8"
				noOfReviews="(2)"
				country="USA"
				cardTitle="Group mountain biking"
				price="$50"
			/>
		</section>
	</>
);
