import XLogo from "../assets/X-logo.png";

const LeftPanel = () => {
  return (
    <div className="hidden md:flex w-1/2 ml-18 mt-10 items-center justify-center">
      <img
        src={XLogo}
        alt="X Logo"
        className="w-120 "
      />
    </div>
  );
};

export default LeftPanel;
