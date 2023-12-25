import Question from "./Question";

const FAQ = () => {
	return (
		<div className="bg-neutral-100 px-4 py-12">
			<div className="max-w-3xl mx-auto">
				<h3 className="text-center text-3xl font-semibold mb-4">
					Frequently asked questions
				</h3>
				<Question title="What is NSBE, and who can join?" defaultOpen>
					<p>
						NSBE stands for the National Society of Black Engineers, and it is
						open to students of all backgrounds who are interested in
						engineering and related fields. Membership is inclusive and welcomes
						anyone with a passion for STEM.
					</p>
				</Question>
				<Question title="What benefits do NSBE members receive?">
					<p>
						NSBE members have access to a range of benefits, including
						professional development opportunities, academic support, networking
						events, mentorship, and a strong community of like-minded peers who
						share their interests and goals.
					</p>
				</Question>
				<Question title="How can I get involved with NSBE at our school?">
					<p>
						To get involved with NSBE at our school, you can visit our instagram
						@nsbeuottawa.
					</p>
				</Question>
				<Question title="What types of events and activities does NSBE host?">
					<p>
						NSBE hosts a variety of events and activities, including workshops,
						guest speaker series, community outreach programs, and social
						gatherings. These events are designed to promote professional
						growth, academic success, and a sense of belonging within the STEM
						community. You can find information about upcoming events on our
						chapter's website or through our communications.
					</p>
				</Question>
			</div>
		</div>
	);
};

export default FAQ;
