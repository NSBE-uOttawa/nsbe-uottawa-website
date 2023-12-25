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

	const sponsorshipFunding = [
		{
			title: "PROFESSIONAL & ACADEMIC DEVELOPMENT: ",
			description:
				"Funding for NSBE members to attend and access workshops, STEM relating conventions and courses.",
		},
		{
			title: "FUNDING FOR EVENTS, WORKSHOPS AND CONVENTIONS: ",
			description:
				"Funding to cover the cost to regional and annual conferences relating to engineering and STEM.",
		},
		{
			title: "COMMUNITY OUTREACH AND SUPPORT: ",
			description:
				"This funding would included funding for our members in need of financial support through scholarship and giving back to the community in needs",
		},
		{
			title: "INFRACSTRUCTURE, OPERATIONAL COST, RESOURCES: ",
			description:
				"This would operational expenses, such as maintaining a club space, purchasing supplies, web	hosting, email, databases, software licensing, ZOOM ect...",
		},
	];

	return (
		<div className="w-full px-8 py-12 md:py-20 flex flex-col items-center ">
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
				Uottawa), you are not just supporting a worthy cause;{" "}
				<span className="font-bold">you're investing in the future</span>. Your
				sponsorship means that you're not only backing our current initiatives
				but also <span className="font-bold">actively contributing</span> to the
				creation of a{" "}
				<span className="font-bold">
					robust legacy of leaders, innovators, and skilled global citizens.
					Together, we can shape a brighter tomorrow, making a lasting, positive
					impact on the world
				</span>{" "}
				for decades to come.
			</p>

			<p className="p-3 text-center text-xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				HELP CREATE THE NEXT GENERATION OF INNOVATOR
			</p>
			<h3 className="p-3 text-center text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Benefits
			</h3>
			<ul className="p-3 text-center mb-6 outline outline-offset-2 outline-indigo-500 ">
				{sponsorshipBenefits.map((benefit, index) => (
					<li className="list-disc list-inside" key={index}>
						{" "}
						{benefit}
					</li>
				))}
			</ul>
			<h3 className="my-4 p-3 text-center text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Sponsor Pacakges
			</h3>
			<SponsorshipCard></SponsorshipCard>
			<h3 className="mt-8 p-3 text-center text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Funding
			</h3>
			<p className="max-w-3xl my-3 p-3 text-center outline outline-offset-2 outline-indigo-500">
				All our events are{" "}
				<span className="font-bold  ">free for participants</span>. NSBE -
				UOttwa is a{" "}
				<span className="font-bold ">
					nonprofit chapter run by volunteering engineering student
				</span>
				. We depend on the{" "}
				<span className="font-bold ">
					support of sponsors and partners to fund
				</span>
				our events. Our commitment extends the classroom education, by providing
				our members{" "}
				<span className="font-bold ">
					with professional development opportunities
				</span>
				.{" "}
				<span className="font-bold ">
					Your contributions play a crucial role in empowering our members
				</span>{" "}
				and sustaining our nonprofit initiatives.
				<span className="font-bold ">
					{" "}
					We ensure that your organization is recognized and highlighted for its
					contribution to our members
				</span>
				.
			</p>

			<p className="p-3 text-center text-xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Empower Excellence, Ignite Innovation: Partner with Us as a Sponsor for
				a Brighter Future!
			</p>

			<ul className="p-3 text-center mb-6 outline outline-offset-2 outline-indigo-500">
				{sponsorshipFunding.map((funding, index) => (
					<li className="mb-3" key={index}>
						<p className="font-bold">{funding.title} </p>
						<p>{funding.description}</p>
					</li>
				))}
			</ul>
			<p className="mt-6 text-center text-xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				STILL HAVE MORE QUESTIONS?
			</p>
			<p className="max-w-3xl  p-3 text-center">
				If you would like to sponsor our organization, please reach out to us
				via email at{" "}
				<a
					className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900 hover:underline hover:text-red-500"
					href="mailto:nsbe.uottawa@gmail.com"
				>
					nsbe.uottawa@gmail.com
				</a>{" "}
				or look through our detailed{" "}
				<a
					href="./NSBE_Uottawa_Winter_2024_Sponsorship_Package.pdf"
					className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900 hover:underline hover:text-red-500"
				>
					sponsorship pacakage here
				</a>
				, and we will get back to you with the next steps. We are also available
				to schedule a meeting to clarify any questions you may have. We look
				forward to hearing from you and welcoming you as a sponsor!
			</p>
		</div>
	);
};

export default Sponsor;
