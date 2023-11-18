import { motion } from "framer-motion";

const NavLink = ({ text, url }) => {
  return (
    <a
      href={url}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600 hover:border-b-4 hover:border-indigo-200 hover:border-b-indigo-500">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

export default NavLink;
