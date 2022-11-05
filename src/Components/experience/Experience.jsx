/** @format */

import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs";
const Experience = () => {
	return (
		<section id="experience">
			<h5> What Skills I Have</h5>
			<h2> My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>HTML/CSS</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>JavaScript</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>React</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>jQuery</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4> JavaScript Frameworks</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>Front End Frameworks</h4>
							<small className="text-light">Experienced</small>
						</artical>
					</div>
				</div>

				{/* backend */}
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>Node JS</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>MongoDB</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>Knowledge of APIs</h4>
							<small className="text-light">Intermediate</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>MySQL</h4>
							<small className="text-light">Experienced</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>Java Script</h4>
							<small className="text-light">Basic</small>
						</artical>

						<artical className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<h4>Python</h4>
							<small className="text-light">Basic</small>
						</artical>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
