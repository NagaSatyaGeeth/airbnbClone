import React from "react";
import ReactDOM from "react-dom";
import App from "../Navbar/Navbar";
import Hero from "../hero/hero";

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<>
		<App />
		<Hero />
	</>
);
