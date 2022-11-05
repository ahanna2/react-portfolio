/** @format */

import React from "react";
import "./about.css";
import Aboutme from "../../assets/aboutme.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {FiFolder} from "react-icons/fi";

const About = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img className="aboutMeImage" src={Aboutme} alt=" About Image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1+ Years Working</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>50+ Worldwide</small>
						</article>

						<article className="about__card">
							<FiFolder className="about__icon" />
							<h5>Projects</h5>
							<small>70+ Completed</small>
						</article>
					</div>
					<p>
						{" "}
						I am a web developer with a vast array of knowledge in many different front end and back end languages,
						responsive frameworks, databases, and best code practices. My objective is simply to be the best web
						developer that I can be and to contribute to the technology industry all that I know and can do.
					</p>
					<a href="#contact" className="btn">
						{" "}
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
