import AuthButtons from "./AuthButtons";
import { useNavigate } from "react-router-dom";
import Divider from "./Divider";

const RightPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">

      <AuthButtons />

      <Divider />

      <button 
        onClick={() => navigate("/signup")}
        className="w-75 h-10 -mt-3 bg-white text-black rounded-full font-bold text-[15px] hover:bg-gray-200 cursor-pointer transition">
        Create account
      </button>

      <p className="w-75 text-[11px] leading-4 text-gray-400 mb-10">
        By signing up, you agree to the{" "}
        <span className="text-[#1d9bf0] hover:underline cursor-pointer">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-[#1d9bf0] hover:underline cursor-pointer">
          Privacy Policy
        </span>
        , including{" "}
        <span className="text-[#1d9bf0] hover:underline cursor-pointer">
          Cookie Use
        </span>
        .
      </p>

      <div className="pt-6">
        <p className="w-75 text-[15px] font-bold mb-3">
          Already have an account?
        </p>

        <button 
          onClick={() => navigate("/signin")}
          className="w-75 h-11 border border-gray-700 rounded-full font-bold text-[15px] hover:bg-white/10 cursor-pointer transition mb-3">
          Sign in
        </button>

        <button 
          onClick={() => navigate("/grok-redirect")}
          className="w-75 h-11 border border-gray-700 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-white/10 cursor-pointer transition text-white">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.puTtIsfpfyhZ6RSgTSecswHaHa?pid=Api&P=0&h=180"
            alt="Grok"
            className="w-7 h-7"
          />
          Get Grok
        </button>
      </div>

    </div>
  );
};

export default RightPanel;
