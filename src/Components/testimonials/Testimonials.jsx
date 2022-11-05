/** @format */

import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {Navigation, Pagination} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: AVTR1,
		name: "Adam",
		review:
			"I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage ! Thank you Alan. ",
	},

	{
		avatar: AVTR2,
		name: "Jake",
		review:
			"From the start of the project, through to completion, Alan supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in creative way gave us a huge amount of confidence in him.",
	},

	{
		avatar: AVTR3,
		name: "Susan",
		review:
			"Alan was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Alan.",
	},

	{
		avatar: AVTR4,
		name: "Nick",
		review:
			"Without doubt one of the most talented programmers out there.  I always go back to Warren when I'm out of my depth and he's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed.",
	},
];
function Testimonials() {
	return (
		<section id="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[Navigation, Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				navigation
				pagination={{clickable: true}}
			>
				{data.map(({avatar, name, review}, index) => {
					return (
						<SwiperSlide className="testimonial" key={index}>
							<div className="client__avatar">
								<img className="avatarPic" src={avatar} />
							</div>
							<h5 className="client__name"> {name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Testimonials;
