/** @format */

import React from "react";
import "./portfolio.css";
import Picture1 from "../../assets/portfolio1.png";
import Picture2 from "../../assets/portfolio2.png";
import Picture3 from "../../assets/portfolio3.png";
import Picture4 from "../../assets/portfolio4.png";
import Picture5 from "../../assets/portfolio5.png";
import Picture6 from "../../assets/portfolio6.png";
import Picture7 from "../../assets/portfolio7.png";
import Picture8 from "../../assets/portfolio8.png";

const project = [
	{
		id: 1,
		picture: Picture1,
		title: "General Knowledge Quiz",
		github: "https://github.com/ahanna2/04-HomeWork-",
		liveDemo: "https://ahanna2.github.io/04-HomeWork-/",
	},

	{
		id: 2,
		picture: Picture2,
		title: "SQL: Employee Tracker",
		github: "https://ahanna2.github.io/12-Challenge/",
		liveDemo: "https://ahanna2.github.io/12-Challenge/",
	},

	{
		id: 3,
		picture: Picture3,
		title: "Note Taker with Express.js",
		github: "https://ahanna2.github.io/11-Challenge/",
		liveDemo: "https://app-takes-notes.herokuapp.com/",
	},

	{
		id: 4,
		picture: Picture4,
		title: "Work Day Scheduler",
		github: "https://github.com/ahanna2/05-Challenge-",
		liveDemo: "https://ahanna2.github.io/05-Challenge-/",
	},

	{
		id: 5,
		picture: Picture5,
		title: "Weather App",
		github: "https://github.com/ahanna2/06-Challenge-",
		liveDemo: "https://ahanna2.github.io/06-Challenge-/",
	},

	{
		id: 6,
		picture: Picture6,
		title: "Generate a Password",
		github: "https://github.com/ahanna2/03-Challenge",
		liveDemo: "https://ahanna2.github.io/03-Challenge/",
	},

	{
		id: 7,
		picture: Picture7,
		title: "Game Reviewer Webside",
		github: "https://github.com/videogame-reviewer/videogame_reviewer",
		liveDemo: "https://remotereviewer.herokuapp.com/",
	},

	{
		id: 8,
		picture: Picture8,
		title: "Just Another Text Editor",
		github: "https://github.com/ahanna2/19-Challenge-/tree/main/PWA",
		liveDemo: "https://pwa-19-challenge.herokuapp.com/",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{project.map(({id, picture, title, github, liveDemo}) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={picture} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn" target="_blank">
									Github
								</a>
								<a href={liveDemo} className="btn" target="_blank">
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
