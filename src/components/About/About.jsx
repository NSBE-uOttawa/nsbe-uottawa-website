const About = () => {
	const AboutObjectives = [
		"Ignite passion among students for diverse engineering disciplines, sparking curiosity and innovation.",
		"Champion the increased enrollment of minority students in engineering, shaping a more diverse and inclusive future in technology.",
		"Empower members to excel, advocating for advanced degrees and professional recognition in engineering and related fields.",
		"Elevate public consciousness about the critical role of minorities in engineering, showcasing opportunities and breaking barriers.",
		"Act as a dynamic voice for Black Engineers in Canada, influencing policies and trends that shape the engineering profession.",
	];
	return (
		<div className="flex flex-col items-center ">
			<h3 className="text-center text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				About Us
			</h3>
			<p className="max-w-3xl my-3 p-3 text-center">
				The National Society of Black Engineers (NSBE) is one of the largest
				student-governed organizations in the world. Our chapter, at the
				University of Ottawa mission is{" "}
				<span className="font-bold">
					“to increase the number of culturally responsible black engineers who
					excel academically, succeed professionally and positively impact the
					community.”
				</span>
			</p>
			<h3 className="text-center text-3xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Our Vision
			</h3>
			<p className="max-w-3xl my-3 p-3 text-center">
				We envision a world in which{" "}
				<span className="font-bold  ">
					engineering is a mainstream word in homes and communities of color
				</span>
				, and all Black students can envision themselves as engineers. In this
				world, Blacks exceed parity in entering engineering fields, earning
				degrees, and succeeding professionally.
			</p>
			<h3 className="p-3 text-center text-3xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				NSBE Objectives
			</h3>
			<ul className="max-w-4.5xl p-3 mb-6 items-center ">
				{AboutObjectives.map((obj, index) => (
					<li className="items-center space-x-3 flex" key={index}>
						<svg
							className="flex-shrink-0 w-5 h-5  text-indigo-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
						{obj}
					</li>
				))}
			</ul>
			<p className=" p-3 text-center text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Excellence. Exposure. Community. Empathy. Leadership.
			</p>
		</div>
	);
};

export default About;
