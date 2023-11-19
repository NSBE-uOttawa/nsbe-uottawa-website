import { useState } from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="bg-white-50">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white-950 p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu className="fixed top-0 left-0 w-full" isOpen={isOpen} />
    </nav>
  );
};

export default NavBar;
