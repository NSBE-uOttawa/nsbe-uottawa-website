import SponsorshipOption from "./SponsorshipOption";

const SponsorshipCard = () => {
	const sponsorshipOptions = [
		{
			title: "Bronze",
			price: "350",
			features: [
				"Logo on Website and Socials",
				"Invitation to NSBE - Uottawa Networking Events and Company Events",
			],
			buttonText: "Get started",
			buttonLink: "#starter",
			titleColorClass: "text-orange-800",
			buttonColorClass:
				"bg-orange-800 hover:bg-orange-800 focus:ring-orange-300 dark:focus:ring-orange-800",
		},
		{
			title: "Silver",
			price: "550",
			features: [
				"Logo on Website and Socials",
				"Invitation to NSBE - Uottawa Networking Events and Company Events",
				"Job postings on the NSBEUottawa webpage ",
				"Access to the NSBE - Uottawa General Body Resume Book",
			],
			buttonText: "Get started",
			buttonLink: "#company",
			titleColorClass: "text-gray-300",
			buttonColorClass:
				"bg-gray-300 hover:bg-gray-400 focus:ring-gray-300 dark:focus:ring-gray-800",
		},
		{
			title: "Gold",
			price: "750",
			features: [
				"Logo on Website and Socials",
				"Invitation to NSBE - Uottawa Networking Events and Company Events",
				"Job postings on the NSBEUottawa webpage ",
				"Access to the NSBE - Uottawa General Body Resume Book",
				"Event of your choosing with the NSBE-Uottawa chapter",
			],
			buttonText: "Get started",
			buttonLink: "#company",
			titleColorClass: "text-yellow-500",
			buttonColorClass:
				"bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 dark:focus:ring-yellow-800",
		},
		{
			title: "Platinum",
			price: "950",
			features: [
				"Logo on Website and Socials",
				"Invitation to NSBE - Uottawa Networking Events and Company Events",
				"Job postings on the NSBEUottawa webpage ",
				"Access to the NSBE - Uottawa General Body Resume Book",
				"Event of your choosing with the NSBE-Uottawa chapter",
				"Host a personalized workshop or event",
				/* ... features ... */
			],
			buttonText: "Get started",
			buttonLink: "#company",
			titleColorClass: "text-sky-200",
			buttonColorClass:
				"bg-sky-200 hover:bg-sky-300 focus:ring-sky-100 dark:focus:ring-sky-300",
		},
		{
			title: "Diamond",
			price: "1200+",
			features: [
				"Logo on Website and Socials",
				"Invitation to NSBE - Uottawa Networking Events and Company Events",
				"Job postings on the NSBEUottawa webpage ",
				"Access to the NSBE - Uottawa General Body Resume Book",
				"Event of your choosing with the NSBE-Uottawa chapter",
				"Host a personalized workshop or event",
				"Company logo on NSBEUottawa merchandise (shirts, jackets, etc. that our members wear)",
				"Scholarship given to Uottawa-NSBE member(s) under company name",
				/* ... features ... */
			],
			buttonText: "Get started",
			buttonLink: "#company",
			titleColorClass: "text-green-300",
			buttonColorClass:
				"bg-green-300 hover:bg-green-600 focus:ring-green-300 dark:focus:ring-green-800",
		},
		// Add other options similarly
	];

	return (
		<section className="bg-white dark:bg-gray-900">
			{/* ... */}
			<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
				{sponsorshipOptions.map((option, index) => (
					<SponsorshipOption key={index} {...option} />
				))}
			</div>
		</section>
	);
};

export default SponsorshipCard;
