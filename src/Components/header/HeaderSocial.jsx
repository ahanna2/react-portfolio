/** @format */

import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {ImGithub} from "react-icons/im";

const HeaderSocial = () => {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/alan-hanna-45483a239/" target="_blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com/ahanna2" target="_blank">
				<ImGithub />
			</a>
		</div>
	);
};

export default HeaderSocial;
