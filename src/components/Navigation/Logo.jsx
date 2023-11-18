import nsbelogo from "../../assets/nsbe-logo.svg";

const Logo = (url) => {
  return (
    <>
      <img
        src={nsbelogo}
        alt="NSBE Logo"
        width="50"
        height="39"
        className="fill-gray-800"
      />
    </>
  );
};

export default Logo;
