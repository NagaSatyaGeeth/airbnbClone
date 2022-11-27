import swimmerImg from "/src/assets/pictures/image 12.png";
import weddingimg from "/src/assets/pictures/wedpic.png";
import mountainbike from "/src/assets/pictures/mounbike.png";

export default [
	{
		id: 1,
		status: "SOLD OUT",
		title: "Life Lessons with Katie Zaferes",
		description:
			'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
		price: 136,
		coverImg: swimmerImg,
		stats: {
			rating: 5.0,
			reviewCount: 6,
		},
		location: "Online",
		openSpots: 0,
	},
	{
		id: 2,
		status: "Available",
		title: "Learn Wedding Photography",
		description:
			"Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
		price: 125,
		coverImg: weddingimg,
		stats: {
			rating: 5.0,
			reviewCount: 30,
		},
		location: "Online",
		openSpots: 27,
	},
	{
		id: 3,
		status: "Available",
		title: "Group Mountain Biking",
		description:
			"Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
		price: 50,
		coverImg: mountainbike,
		stats: {
			rating: 4.8,
			reviewCount: 2,
		},
		location: "Norway",
		openSpots: 3,
	},
];
