import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const MenuLink = ({ text, url }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={url}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600 hover:border-b-4 hover:border-indigo-200 hover:border-b-indigo-500">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default MenuLink;

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
