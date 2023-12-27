import PropTypes from "prop-types";
import { motion } from "framer-motion";
import nsbelogo from "../../assets/Transparent_Logo.png";

const CompanySection = () => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
				<div className=" grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
					<motion.a
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className="box flex justify-center items-center rounded-2xl border-2 border-indigo-500 "
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
						className="box flex justify-center items-center  rounded-2xl border-2 border-indigo-500"
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
						className="box flex justify-center items-center  rounded-2xl border-2 border-indigo-500"
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
						className="box flex justify-center items-center  rounded-2xl border-2 border-indigo-500"
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
						className="box flex justify-center items-center  rounded-2xl border-2 border-indigo-500"
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
						className="box flex justify-center items-center  rounded-2xl border-2 border-indigo-500"
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
