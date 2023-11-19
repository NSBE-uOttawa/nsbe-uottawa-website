import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import industryNight from "../../assets/industry_nightv3.png";
import nsbelogo from "../../assets/nsbe-logo.svg";
import gamesNight from "../../assets/gamesNight.webp";
import EventsCard from "./EventsCard";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const items = [
  {
    id: 1,
    url: gamesNight,
    category: "NSBE x BSLA",
    date: "October 19th",
    title: "Games Night",
    description:
      "Join us on October 19th for a board game night in partnership with BSLA!",
  },
  {
    id: 2,
    url: industryNight,
    category: "NSBE x WIE",
    date: "October 30th",
    title: "Industry Night",
    description:
      "Get ready for an electrifying night of collaboration! Women in Engineering (WIE) and NSBE are joining forces to bring you the ultimate industry night event.",
  },
  {
    id: 3,
    url: nsbelogo,
    category: "Osa doing dev things",
    date: "",
    title: "Looks like a win",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    url: nsbelogo,
    category: "P2 Osa doing dev things",
    date: "",
    title: "Back feels great",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];

const EventsHomePage = () => {
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    window.innerWidth > BREAKPOINTS.lg
      ? 3
      : window.innerWidth > BREAKPOINTS.sm
      ? 2
      : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((prevOffset) => prevOffset + CARD_SIZE);
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((prevOffset) => prevOffset - CARD_SIZE);
  };

  return (
    <section className="bg-white-950" id="events">
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-center mb-4 text-3xl font-semibold">
            Events? <span className="text-slate-500">Yes, we've got those</span>
          </p>
          <div
            className="flex"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {items.map((item) => {
              return <EventsCard key={item.id} {...item} />;
            })}
          </div>
        </div>
        <>
          <button
            className={`absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3 ${
              CAN_SHIFT_LEFT ? "" : "hidden"
            }`}
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </button>
          <button
            className={`absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3 ${
              CAN_SHIFT_RIGHT ? "" : "hidden"
            }`}
            onClick={shiftRight}
          >
            <FiChevronRight />
          </button>
        </>
      </div>
    </section>
  );
};

export default EventsHomePage;
