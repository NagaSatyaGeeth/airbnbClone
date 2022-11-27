import React from "react";
import "./card.css";
import star from "/src/assets/Star 1.png";

var cards = (props) => {
	let statuses;
	if (props.item.openSpots === 0) {
		statuses = "SOLD OUT";
	} else if (props.item.location === "Online") {
		statuses = "ONLINE";
	} else {
		statuses = "Available";
	}
	return (
		<div className="card-placeholder">
			{props.item.status && (
				<div className="card-info">
					<div className="card-info-desc">{statuses}</div>
				</div>
			)}
			<div className="card-pic">
				<img
					src={`src/assets/${props.item.coverImg}`}
					className="activity-pic"
				/>
			</div>
			<div className="rating">
				<div className="star-pic">
					<img src={star} />
				</div>
				<div className="total-rating">{props.item.stats.rating}</div>
				<div className="no-of-reviews">({props.item.stats.reviewCount}) •</div>
				<div className="country">{props.item.location}</div>
			</div>
			<div className="card-title">{props.item.cardTitle}</div>
			<div className="price">
				${props.item.price}
				<span className="person"> / person</span>
			</div>
		</div>
	);
};

export default cards;
