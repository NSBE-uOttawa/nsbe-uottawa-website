import React, { useState } from "react";
import nsbeLogo from "../../assets/Transparent_Logo.png";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

const Execs = () => {
	const [selectedYear, setSelectedYear] = useState("2023-2024");

	const handleChangeYear = (event) => {
		setSelectedYear(event.target.value);
	};

	const executiveData = {
		"2023-2024": [
			{
				id: 1,
				name: "AJ Ekwueme",
				role: "CO-President",
				linkedin: "https://www.linkedin.com/in/akachukwujoshuaekwueme/",
				imageUrl:
					"https://media.licdn.com/dms/image/C5603AQEyTtfI1QVvCA/profile-displayphoto-shrink_400_400/0/1645657986583?e=1705536000&v=beta&t=1cIVsgIAONQqjk1-ejvYp-97xKak3J_pNPOK2cyWonM",
			},
			{
				id: 2,
				name: "Markos Brown",
				role: "CO-President",
				linkedin: "https://www.linkedin.com/in/markos-brown/",
				imageUrl:
					"https://media.licdn.com/dms/image/C4D03AQGl4osOuP2bng/profile-displayphoto-shrink_400_400/0/1641962977942?e=1705536000&v=beta&t=FCerxhibl4-apU9CajmKEC78NXw-qi8u5JEZxSlr1pI",
			},
			{
				id: 3,
				name: "Elsa Lange",
				role: "VP Events",
				linkedin: "https://www.linkedin.com/in/elsa-lange-5124a61b4/",
				imageUrl: nsbeLogo,
			},
			{
				id: 4,
				name: "Bayza Woldemariam",
				role: "VP Communication",
				linkedin: "https://www.linkedin.com/in/bayza-woldemariam-4087a91b6/",
				imageUrl:
					"https://media.licdn.com/dms/image/C4D03AQHaXhO-mivDBA/profile-displayphoto-shrink_800_800/0/1628534674064?e=1705536000&v=beta&t=ley5I3RrAW2HzG2vDCo3fbC-t8JYPYrpEHcb2E_QLVA",
			},
			{
				id: 5,
				name: "Rachel Olugbemiro",
				role: "VP Administration",
				linkedin: "https://www.linkedin.com/in/rachel-olugbemiro/",
				imageUrl:
					"https://media.licdn.com/dms/image/D5603AQGScfM8op2Pkw/profile-displayphoto-shrink_400_400/0/1683247109881?e=1705536000&v=beta&t=AEM5dt5j7yxlTcbdU2Rmk3FcL5H-utsiMCJ330Palwc",
			},
			{
				id: 6,
				name: "Osa Ikhinmwin",
				role: "Webmaster",
				linkedin: "https://www.linkedin.com/in/osaaa/",
				imageUrl:
					"https://media.licdn.com/dms/image/D4E03AQGjz_GLW3zWAg/profile-displayphoto-shrink_400_400/0/1674774387754?e=1705536000&v=beta&t=gfToTnj9an0i006YA__2ZKLFOH8bTjrQFNa0YpiFRyI",
			},
			{
				id: 7,
				name: "Husaina Raji",
				role: "VP Outreach",
				linkedin: "",
				imageUrl: nsbeLogo,
			},
			{
				id: 8,
				name: "Raphaelle Jean-Baptiste",
				role: "VP Finance",
				linkedin: "",
				imageUrl: nsbeLogo,
			},
			// Add more executives for 2023-2024
		],
		"2022-2023": [
			{
				id: 1,
				name: "Bayza Woldemariam",
				role: "President",
				linkedin: "https://www.linkedin.com/in/bayza-woldemariam-4087a91b6/",
				imageUrl:
					"https://media.licdn.com/dms/image/C4D03AQHaXhO-mivDBA/profile-displayphoto-shrink_800_800/0/1628534674064?e=1705536000&v=beta&t=ley5I3RrAW2HzG2vDCo3fbC-t8JYPYrpEHcb2E_QLVA",
			},
			{
				id: 2,
				name: "Markos Brown",
				role: "Vice President",
				imageUrl: nsbeLogo,
			},
			{
				id: 3,
				name: "Haybe Abdi",
				role: "VP Finance/Membership Chair",
				imageUrl: nsbeLogo,
			},
			{
				id: 4,
				name: "Noah Tedla Aynalem",
				role: "VP Communication",
				imageUrl: nsbeLogo,
			},
			{
				id: 5,
				name: "Toni Adeleye",
				role: "VP Finance",
				imageUrl: nsbeLogo,
			},
			{
				id: 6,
				name: "AJ Ekwueme",
				linkedin: "https://www.linkedin.com/in/akachukwujoshuaekwueme/",
				role: "VP External Logistics",
				imageUrl: nsbeLogo,
			},
			{
				id: 7,
				name: "Abdullateef Adeniji",
				role: "VP Operations",
				imageUrl: nsbeLogo,
			},
			{
				id: 8,
				name: "Marina Foumane",
				role: "Membership Chair",
				imageUrl: nsbeLogo,
			},
			{
				id: 9,
				name: "Elsa Lange",
				linkedin: "https://www.linkedin.com/in/elsa-lange-5124a61b4/",
				role: "Director of Events",
				imageUrl: nsbeLogo,
			},
			{
				id: 10,
				name: "Bimpe Awotundun",
				role: "Alumni Coordinator",
				imageUrl: nsbeLogo,
			},
			// Add more executives for 2022-2023
		],
		"2021-2022": [
			{
				id: 1,
				name: "Bimpe Awotundun",
				role: "CO-President",
				imageUrl: nsbeLogo,
			},
			{
				id: 2,
				name: "Susan Peters",
				role: "CO-President",
				imageUrl: nsbeLogo,
			},
			{
				id: 3,
				name: "Karl-W Gueyie",
				role: "VP Financial Affairs",
				imageUrl: nsbeLogo,
			},
			{
				id: 4,
				name: "Bayza Woldemariam",
				role: "VP Operations",
				linkedin: "https://www.linkedin.com/in/bayza-woldemariam-4087a91b6/",
				imageUrl:
					"https://media.licdn.com/dms/image/C4D03AQHaXhO-mivDBA/profile-displayphoto-shrink_800_800/0/1628534674064?e=1705536000&v=beta&t=ley5I3RrAW2HzG2vDCo3fbC-t8JYPYrpEHcb2E_QLVA",
			},
			{
				id: 5,
				name: "Lola Omowa",
				role: "Social Media and Marketing Lead",
				imageUrl: nsbeLogo,
			},
			{
				id: 6,
				name: "Munachi Chuwkwujindu",
				role: "VP Social Affairs and Team Lead",
				imageUrl: nsbeLogo,
			},
			{
				id: 7,
				name: "Marina Foumane",
				role: "VP Administration",
				imageUrl: nsbeLogo,
			},
		],

		// Add more years and executives as needed
	};

	return (
		<div className="container mx-auto mt-5 p-4 sm:w-full">
			<div className="flex flex-col items-center">
				<h1 className="text-center text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-indigo-500">
					Executive Gallery
				</h1>
				<div className="mb-4">
					<label htmlFor="year" className="mr-2">
						Select Year:
					</label>
					<select
						id="year"
						value={selectedYear}
						onChange={handleChangeYear}
						className="p-2 border border-gray-300 rounded-md"
					>
						{Object.keys(executiveData).map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
				{executiveData[selectedYear].map((executive) => (
					<div
						key={executive.id}
						className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-indigo-200 p-2 transition-all duration-500 hover:scale-[1.01] group"
					>
						<div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-gradient-to-r from-indigo-900 to-indigo-500 p-8 transition-colors duration-500">
							<div className="flex justify-between gap-2">
								<div className="flex-col">
									<h2 className="text-2xl text-slate-50 font-semibold">
										{executive.name}
									</h2>
									<p className="text-sm font-semibold text-slate-400 mb-2">
										{executive.role}
									</p>
								</div>
								{executive.linkedin && (
									<a href={executive.linkedin} className="flex items-center">
										<button className="text-slate-50 text-xl font-medium px-2 py-1 shadow-[3px_3px_0_black] transition-all">
											<FiLinkedin />
										</button>
									</a>
								)}
							</div>
							<img
								src={executive.imageUrl}
								alt={executive.name}
								className="w-full h-49 object-cover rounded-md"
							/>
						</div>
						<motion.div
							initial={{ rotate: "0deg" }}
							animate={{ rotate: "360deg" }}
							style={{ scale: 1.75 }}
							transition={{
								repeat: Infinity,
								duration: 3.5,
								ease: "linear",
							}}
							className="absolute inset-0 z-0 bg-gradient-to-br from-violet-900 via-indigo-900/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						/>
						{/* Hover effect for the card */}
						<div className="absolute inset-0 z-0 transition-all duration-500 group-hover:bg-slate-800/50"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Execs;
