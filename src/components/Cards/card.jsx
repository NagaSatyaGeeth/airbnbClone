import React from "react";
import "./card.css";
import swimmerImg from "/src/assets/image 12.png";
import star from "/src/assets/Star 1.png";

var cards = () => {
	return (
		<div className="card-placeholder">
			<div className="card-info">
				<div className="card-info-desc">SOLD OUT</div>
			</div>
			<div className="card-pic">
				<img src={swimmerImg} className="swimmer-pic" />
			</div>
			<div className="rating">
				<div className="star-pic">
					<img src={star} />
				</div>
				<div className="total-rating">5.0</div>
				<div className="no-of-reviews">(6)</div>
				<div className="country">USA</div>
			</div>
			<div className="card-title">Life lessons wiht Katie</div>
			<div className="price">
				From $136 <span className="person"> / person</span>
			</div>
		</div>
	);
};

export default cards;
