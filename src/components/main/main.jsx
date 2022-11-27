import React from "react";
import ReactDOM from "react-dom/client";
import App from "../Navbar/Navbar";
import Hero from "../hero/hero";
import Cards from "../Cards/card";
import "./main.css";
import Data from "/src/data.js";

const Cardplace = Data.map((item) => {
	return <Cards key={item.id} item={item} />;
});

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<>
		<App />
		<Hero />
		<section className="cards-wrapper">{Cardplace}</section>
	</>
);
