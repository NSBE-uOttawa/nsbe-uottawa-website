import NavLink from "./NavLink";

const NavRight = () => {
  return (
    <div className="flex items-center gap-4 ">
      {" "}
      <NavLink text="Home" url="/" />
      <NavLink text="About Us" url="/about" />
      <NavLink text="Events" url="#events" />
      <NavLink text="Execs" url="/execs" />
      <NavLink text="Contact Us" url="#footer" />
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoovznslXBO5fscMkPBSC_Sha6GqhFvLAMPuBrs19mAbBe5A/viewform">
        <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white text-base md:text-lg font-medium px-2 py-1 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all hidden md:block ">
          Become A Member
        </button>
      </a>
    </div>
  );
};

export default NavRight;
