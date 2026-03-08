import XLogo from "../assets/X-logo.png";

const TopRightPanel = () => {
  return (
    <div className="mb-2">
      <img
        src={XLogo}
        className="w-15 h-15 mb-6 md:hidden ml-1 mt-4"
        alt="X"
      />
      <h1 className="max-w-full md:max-w-300 mb-13 leading-15 font-extrabold tracking-[-0.01em] text-[40px] md:text-[70px] mt-12 md:mt-25 ">
        Happening now
      </h1>

      <h2 className="mt-6 mb-7  font-bold text-[22px] md:text-[30px]">
        Join today.
      </h2>
    </div>
  );
}

export default TopRightPanel;
