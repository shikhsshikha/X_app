import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import Divider from "./Divider";
import VerifyUsername from "./auth/VerifyUsername";
import CreateAccount from "./additionalPages/CreateAccount";
import SignIn from "./additionalPages/SignIn";
import SignUp from "./additionalPages/SignUp";

const RightPanel = ({ onSignupSuccess }) => {
  const navigate = useNavigate();
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);

  return (
    <div className="space-y-4">
      <AuthButtons onSignupSuccess={() => setShowVerifyPopup(true)} />

      {/* 🔥 Verify Username Popup */}
      {showVerifyPopup && (
        <VerifyUsername onClose={() => setShowVerifyPopup(false)} />
      )}

      {showCreatePopup && (
        <CreateAccount onClose={() => setShowCreatePopup(false)} />
      )}

      {showSignInPopup && (
        <SignIn
          onClose={() => setShowSignInPopup(false)}
          onOpenSignUp={() => {
            setShowSignInPopup(false);
            setShowSignUpPopup(true);
          }}
        />
      )}

      {showSignUpPopup && (
        <SignUp
          onClose={() => setShowSignUpPopup(false)}
          onCreateAccount={() => {
            setShowSignUpPopup(false);
            setShowCreatePopup(true);
          }}
        />
      )}

      <Divider />

      <button
        onClick={() => setShowCreatePopup(true)}
        className=" -mt-3 bg-white text-black rounded-full font-bold
                   text-[15px] w-full md:w-75 h-10 hover:bg-gray-200 cursor-pointer transition"
      >
        Create account
      </button>

      <p className="w-full md:w-75 text-[11px] leading-4 text-gray-400 mb-10">
        By signing up, you agree to the{" "}
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1d9bf0] hover:underline cursor-pointer"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1d9bf0] hover:underline cursor-pointer"
        >
          Privacy Policy
        </a>
        , including{" "}
        <a
          href="/cookies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1d9bf0] hover:underline cursor-pointer"
        >
          Cookie Use
        </a>
        .
      </p>

      <div className="pt-6">
        <p className="w-full md:w-75 text-[15px] font-bold mb-3">
          Already have an account?
        </p>

        <button
          onClick={() => setShowSignInPopup(true)}
          className="border border-gray-700 rounded-full
                    font-bold text-[15px] w-full md:w-75 h-11 hover:bg-white/10 transition mb-3"
        >
          Sign in
        </button>

        <button
          onClick={() => navigate("/grok-redirect")}
          className="border border-gray-700 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 w-full md:w-75 h-11 hover:bg-white/10 cursor-pointer transition text-white"
        >
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