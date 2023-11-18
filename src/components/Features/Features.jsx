import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";

const Features = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position === features.length - 1) {
      setPosition(0);
    } else if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-neutral-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-3xl font-bold leading-[1.2] md:text-4xl">
            NSBE offers <span className="text-neutral-400">oppurtunities</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-indigo-600 p-4 text-2xl text-white transition-colors hover:bg-neutral-400"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-indigo-600 p-4 text-2xl text-white transition-colors hover:bg-neutral-400"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, description, Icon }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-indigo-600 text-white" : " bg-white"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default Features;

const features = [
  {
    title: "Professional Development",
    Icon: FiUpload,
    description:
      "NSBE provides opportunities for students to enhance their professional skills through workshops, networking events, and access to industry connections, helping them prepare for successful careers in engineering and related fields.",
  },
  {
    title: "Academic Support",
    Icon: FiArrowUp,
    description:
      "NSBE offers academic resources, study groups, and tutoring to help members excel in their engineering courses, ensuring they have the necessary support to achieve academic success.",
  },
  {
    title: "Community and Mentorship",
    Icon: FiTarget,
    description:
      "NSBE fosters a strong sense of community and mentorship, connecting students with like-minded individuals and experienced professionals who can provide guidance, encouragement, and valuable insights as they navigate their academic and career paths.",
  },
  {
    title: "Networking",
    Icon: FiLink,
    description:
      "NSBE provides a platform to build valuable connections with peers, professionals, and industry leaders, offering opportunities for mentorship and collaboration.",
  },
  {
    title: "Leadership Development",
    Icon: FiTool,
    description:
      " NSBE offers leadership programs and experiences that help members develop essential skills, such as communication, teamwork, and project management, to excel in their academic and professional endeavors.",
  },
];
