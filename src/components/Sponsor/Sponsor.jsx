import SponsorshipCard from "./SponsorshipCard";
import CompanySection from "./CompanySection";

const Sponsor = () => {
	const sponsorshipBenefits = [
		"The Organization's logo will be displayed on the website and social media as a sponsor of the club.",
		"The Organization or Company will be given a spot at NSBE events and industry events.",
		"Agreed sponsors will have a link to their job portal/website as specified by their sponsorship package.",
		"Promotion for events will take place as specified in the sponsorship package.",
		"Sponsors will be granted access to the University of Ottawa's General Body Resume Book as specified by their sponsorship package.",
		"Sponsors will gain access to our network across other NSBE Chapters and within the general University of Ottawa community.",
	];

	return (
		<div className="flex flex-col items-center ">
			<h3 className="p-3 text-center text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Sponsorship
			</h3>
			<h2 className="mt-8 mb-6 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
				Our Current Sponsors
			</h2>
			<CompanySection></CompanySection>
			<h3 className="p-3 mb-5 text-center text-4xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Why Sponsor Us
			</h3>
			<p className="max-w-3xl my-3 p-3 text-center outline outline-offset-2 outline-indigo-500">
				By partnering with the National Society of Black Engineers (NSBE -
				Uottawa), you are not just supporting a worthy cause; you're investing
				in the future. Your sponsorship means that you're not only backing our
				current initiatives but also actively contributing to the creation of a
				robust legacy of leaders, innovators, and skilled global citizens.
				Together, we can shape a brighter tomorrow, making a lasting, positive
				impact on the world for decades to come.
			</p>

			<p>HELP CREATE THE NEXT GENERATION OF INNOVATOR</p>
			<h3 className="p-3 text-center text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Benefits
			</h3>
			<ul className="p-3 text-center mb-6 outline outline-offset-2 outline-indigo-500">
				{sponsorshipBenefits.map((benefit, index) => (
					<li key={index}>* {benefit}</li>
				))}
			</ul>
			<SponsorshipCard></SponsorshipCard>
		</div>
	);
};

export default Sponsor;
