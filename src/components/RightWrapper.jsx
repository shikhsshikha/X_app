import TopRightPanel from "./TopRightPanel";
import RightPanel from "./RightPanel";

const RightWrapper = () => {
  return (
    <div className="flex w-full md:w-1/2 items-center px-8">
      <div className="w-full max-w-140">
        <TopRightPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default RightWrapper;
