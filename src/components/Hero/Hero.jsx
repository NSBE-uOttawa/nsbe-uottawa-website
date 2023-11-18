const Hero = () => {
  return (
    <section className="bg-white pb-5">
      <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
        <h1 className="text-center text-4xl md:text-6xl max-w-4xl font-semibold">
          National Society of Black Engineers: <p>Uottawa Chapter</p>
        </h1>
        <p className="text-center max-w-3xl my-6">
          Welcome to NSBE, where we're committed to empowering the engineers of
          tomorrow. Our community thrives on professional growth, academic
          support, and a shared passion for innovation. Join us to advance your
          career and make a difference in the world of STEM.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoovznslXBO5fscMkPBSC_Sha6GqhFvLAMPuBrs19mAbBe5A/viewform">
          <button className="bg-indigo-600 text-white text-base md:text-lg font-medium px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            Become A Member
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;