import { motion } from "framer-motion";
import MenuLink from "./MenuLink";

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
      style={{ zIndex: 1000 }}
    >
      {" "}
      <MenuLink text="Home" url="/" />
      <MenuLink text="About Us" url="/about" />
      <MenuLink text="Events" url="#events" />
      <MenuLink text="Execs" url="/Execs" />
      <MenuLink text="Contact Us" url="#footer" />
    </motion.div>
  );
};

export default NavMenu;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};
