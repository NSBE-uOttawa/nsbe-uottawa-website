import PropTypes from "prop-types";
import { motion } from "framer-motion";
import nsbelogo from "../../assets/Transparent_Logo.png";
import romaeris from "../../assets/Romaeris-logo-new.jpeg";

const CompanySection = () => {
	return (
		<section className="bg-white ">
			<div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
				<div className=" grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 ">
					<motion.a
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className="box flex justify-center items-center shadow-2xl rounded-2xl "
						onClick={() =>
							window.open(
								"https://www.romaeris.com/",
								"_blank",
								"noopener,noreferrer"
							)
						}
					>
						<img src={romaeris} alt="NSBE Logo" className="h-50  " />
					</motion.a>

					<motion.a
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className="box flex justify-center items-center  shadow-2xl rounded-2xl "
					>
						<img
							src={nsbelogo}
							alt="NSBE Logo"
							className="h-50  hover:text-gray-900 dark:hover:text-white"
						/>
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className="box flex justify-center items-center shadow-2xl rounded-2xl"
					>
						<img
							src={nsbelogo}
							alt="NSBE Logo"
							className="h-50  hover:text-gray-900 dark:hover:text-white"
						/>
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className="box flex justify-center items-center shadow-2xl rounded-2xl"
					>
						<img
							src={nsbelogo}
							alt="NSBE Logo"
							className="h-50  hover:text-gray-900 dark:hover:text-white"
						/>
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className="box flex justify-center items-center shadow-2xl rounded-2xl"
					>
						<img
							src={nsbelogo}
							alt="NSBE Logo"
							className="h-50  hover:text-gray-900 dark:hover:text-white"
						/>
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className="box flex justify-center items-center shadow-2xl rounded-2xl"
					>
						<img
							src={nsbelogo}
							alt="NSBE Logo"
							className="h-50  hover:text-gray-900 dark:hover:text-white"
						/>
					</motion.a>
				</div>
			</div>
		</section>
	);
};
CompanySection.propTypes = {
	title: PropTypes.string.isRequired,
	companies: PropTypes.string.isRequired,
};

export default CompanySection;
