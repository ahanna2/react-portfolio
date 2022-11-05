/** @format */

import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";

const Footer = () => {
	return (
		<section id="footer">
			<footer>
				<a href="#" className="footer__logo"></a>

				<ul className="permalinks">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#about">about</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#service">Services</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
				<div className="footer__socials">
					<a href="https://www.facebook.com/alan.hana" target={"_blank"}>
						<FaFacebookF />
					</a>
					<a href="https://www.instagram.com/alanjalil/" target={"_blank"}>
						<FiInstagram />
					</a>
					<a href="https://twitter.com/AlanHanna20" target={"_blank"}>
						<FiTwitter />
					</a>
				</div>
				<div className="footer__copyright">
					<small>&copy; All rights reserved.</small>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
