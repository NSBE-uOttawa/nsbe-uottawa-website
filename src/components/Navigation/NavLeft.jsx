import { motion } from "framer-motion";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-inidgo-600 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
    </div>
  );
};

export default NavLeft;
