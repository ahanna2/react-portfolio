/** @format */

import React from "react";
import "./service.css";
import {BiCheck} from "react-icons/bi";

const Service = () => {
	return (
		<section id="service">
			<h5>What I offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				{/* ui ux design */}
				<article className="service">
					<div className="service__head">
						<h3>UI/UX Design</h3>
					</div>
					{/*For reference https://www.appnovation.com/ux-design/*/}
					<ul className="service__list">
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>User-focused, customer-centric that deliver best results.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Wireframe & Interactive Prototyping Services.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Customer Experience CX Consulting</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Wireframing, user flows, mockups.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Usability Testing.</p>
						</li>
					</ul>
				</article>
				{/* web development */}
				<article className="service">
					<div className="service__head">
						<h3>Web Development</h3>
					</div>

					<ul className="service__list">
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Actively engaged in web creative design.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Provided technical help for exixting products.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Provide professional customer services.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Assisted in product development.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Create & deployed apps while learning languages.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Developed innovative techniques to help clients.</p>
						</li>
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h3>Content Creation</h3>
					</div>

					<ul className="service__list">
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Researching what to create.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Generating content ideas from research results.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Developing content ideas into valuable content pieces.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Distributing content pieces to the proper channels.</p>
						</li>
						<li>
							<i>
								<BiCheck className="service__list-icon" />
							</i>
							<p>Promoting developed content pieces to the right audience.</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Service;
