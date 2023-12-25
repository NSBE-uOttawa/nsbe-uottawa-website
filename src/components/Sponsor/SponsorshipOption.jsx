import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SponsorshipOption = ({
	title,
	description,
	price,
	features,
	buttonText,
	buttonLink,
	titleColorClass,
	buttonColorClass,
}) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
		>
			<h3 className={`mb-4 text-2xl font-semibold  ${titleColorClass}`}>
				{title}
			</h3>
			<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
				{description}
			</p>
			<div className="flex justify-center items-baseline my-8">
				<span className="mr-2 text-5xl font-extrabold">${price}</span>
				<span className="text-gray-500 dark:text-gray-400">/ School Year</span>
			</div>
			<ul role="list" className="mb-8 space-y-4 text-left">
				{features.map((feature, index) => (
					<li key={index} className="flex items-center space-x-3">
						{/* SVG here */}
						<svg
							className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
						<span>{feature}</span>
					</li>
				))}
			</ul>
			<a
				href={buttonLink}
				className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  ${buttonColorClass}`}
			>
				{buttonText}
			</a>
		</motion.div>
	);
};

SponsorshipOption.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	features: PropTypes.arrayOf(PropTypes.string).isRequired,
	buttonText: PropTypes.string.isRequired,
	buttonLink: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	titleColorClass: PropTypes.string,
	buttonColorClass: PropTypes.string,
};
export default SponsorshipOption;
