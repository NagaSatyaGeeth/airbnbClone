import React from "react";
import "./card.css";
import swimmerImg from "/src/assets/image 12.png";
import star from "/src/assets/Star 1.png";

var cards = (props) => {
	return (
		<div className="card-placeholder">
			<div className="card-info">
				<div className="card-info-desc">{props.status}</div>
			</div>
			<div className="card-pic">
				<img src={props.img} className="swimmer-pic" />
			</div>
			<div className="rating">
				<div className="star-pic">
					<img src={star} />
				</div>
				<div className="total-rating">{props.rating}</div>
				<div className="no-of-reviews">{props.noOfReviews}</div>
				<div className="country">{props.country}</div>
			</div>
			<div className="card-title">{props.cardTitle}</div>
			<div className="price">
				{props.price}
				<span className="person"> / person</span>
			</div>
		</div>
	);
};

export default cards;
