import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Question = ({ title, children, defaultOpen = false }) => {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<motion.div
			animate={open ? "open" : "closed"}
			className="border-b-[1px] border-b-slate-300"
		>
			<button
				onClick={() => setOpen((pv) => !pv)}
				className="py-6 w-full flex items-center justify-between gap-4"
			>
				<motion.span
					variants={{
						open: {
							color: "rgba(3, 6, 23, 0)",
						},
						closed: {
							color: "rgba(3, 6, 23, 1)",
						},
					}}
					className="text-lg font-medium text-left bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text"
				>
					{title}
				</motion.span>
				<motion.span
					variants={{
						open: {
							rotate: "180deg",
							color: "rgb(124 58 237)",
						},
						closed: {
							rotate: "0deg",
							color: "#030617",
						},
					}}
				>
					<FiChevronDown className="text-2xl" />
				</motion.span>
			</button>
			<motion.div
				initial={false}
				animate={{
					height: open ? "fit-content" : "0px",
					marginBottom: open ? "24px" : "0px",
				}}
				className="overflow-hidden text-slate-600"
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Question;