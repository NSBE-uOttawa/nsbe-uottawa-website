const EventsCard = ({ url, category, title, description, date, infoUrl }) => {
	const CARD_WIDTH = 350;
	const MARGIN = 20;

	return (
		<div
			className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
			style={{ width: CARD_WIDTH, marginRight: MARGIN }}
		>
			<div
				className="rounded-2xl"
				style={{
					width: CARD_WIDTH,
					height: CARD_WIDTH,
					backgroundImage: `url(${url})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
					<span className="text-xs font-semibold uppercase text-violet-300">
						{category}
						<p>{date}</p>
					</span>
					<p className="my-2 text-3xl font-bold">{title}</p>
					<p className="text-lg text-slate-300">{description}</p>
					<a href={infoUrl}>
						<button className="item-center mt-3 rounded-lg p-3 outline outline-2 outline-offset-2 hover:outline-indigo-700">
							More info
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default EventsCard;
