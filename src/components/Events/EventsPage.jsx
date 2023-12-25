import EventsHomepage from "./EventsHomePage";
const EventsPage = () => {
	return (
		<div className="flex flex-col items-center ">
			<h3 className="text-center text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">
				Events
			</h3>
			<EventsHomepage />
		</div>
	);
};

export default EventsPage;
