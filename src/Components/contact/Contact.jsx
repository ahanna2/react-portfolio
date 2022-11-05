/** @format */

import React from "react";
import "./contact.css";
import {MdOutlineMailOutline} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsTelephoneInbound} from "react-icons/bs";
import {useRef} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_xd99qga", "template_6uvyb2f", form.current, "63XHuxtR0TUO_aFK0")
			.then(e.target.reset());
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMailOutline className="contactIcon" />
						<h4>Email</h4>
						<h5>alanjalil2@gmail.com</h5>
						<a href="mailto:alanjalil2@gmail.com" target="_blank">
							Send an Email
						</a>
					</article>

					<article className="contact__option">
						<RiMessengerLine className="contactIcon" />
						<h4>Messenger</h4>
						<h5>Facebook</h5>
						<a href="https://m.me/alan.hana" target="_blank">
							Send a message
						</a>
					</article>

					<article className="contact__option">
						<BsTelephoneInbound className="contactIcon" />
						<h4>Phone</h4>
						<h5>Number</h5>
						<a href="+1773-739-0797" target="_blank">
							Give Me a Call
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder=" Your Full Name" required />
					<input type="Email" name="email" placeholder=" Your Email" required />
					<textarea type name="message" row="7" placeholder=" Your Message" required />
					<button className="btn" type="submit">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
