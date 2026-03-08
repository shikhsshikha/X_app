import TopRightPanel from "./TopRightPanel";
import RightPanel from "./RightPanel";

const RightWrapper = ({ onSignupSuccess }) => {
  return (
    <div className="flex w-full md:w-1/2 md:items-start items-center px-8 md:px-8">
      <div className="w-full max-w-full md:max-w-140">
        <TopRightPanel />
        <RightPanel onSignupSuccess={onSignupSuccess}  />
      </div>
    </div>
  );
};

export default RightWrapper;
