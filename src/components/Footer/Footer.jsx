import React from "react";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div
				className="flex flex-col text-black-600 mx-auto mt-10 items-center text-center"
				id="footer"
			>
				<h3 className="text-center text-3xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
					Contact Us
				</h3>

				<div className="flex flex-row items-center gap-10 pt-1 p-4 text-4xl border-b-4 border-b-indigo-500/100 ">
					<a href="https://www.linkedin.com/in/national-society-of-black-engineers-nsbe-uofo-university-of-ottawa-chapter-508118294/">
						<button className=" text-black text-2xl font-medium px-2 py-1 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all ">
							<FiLinkedin />
						</button>
					</a>
					<a href="https://www.instagram.com/nsbeuottawa/?hl=en">
						<button className=" text-black text-2xl font-medium px-2 py-1 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all ">
							<FiInstagram />
						</button>
					</a>
					<a href="https://discord.com/invite/nDWBmzSany">
						<button className=" text-black text-2xl font-medium px-2 py-1 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all ">
							<FaDiscord />
						</button>
					</a>
					<a href="mailto:nsbe.uottawa@gmail.com">
						<button className=" text-black text-2xl font-medium px-2 py-1 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all ">
							<FiMail />
						</button>
					</a>
				</div>
				<div className="mb-8 text-sm flex flex-col justify-between ">
					<a className="self-center " href="#">
						Constitution
					</a>
					<p className="">
						Copyright © 2023 NSBE uOttawa Chapter. All rights reserved.
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
