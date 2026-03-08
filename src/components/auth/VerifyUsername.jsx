import XLogo from "../../assets/logo-white.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyUsername = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const usernameRegex = /^@[a-zA-Z0-9_]{4,15}$/;

  const isValidUsername = usernameRegex.test(username);

  const handleNext = () => {
    if (!isValidUsername) {
      setError(
        "Invalid username. Use @ + 4–15 letters, numbers, or underscores."
      );
      return;
    }
    setError("");

    onClose();          
    navigate("/home");  
  };

  return (
    <div className="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center">
      {/* CARD */}
      <div className="relative w-150 h-160 bg-black rounded-2xl border border-gray-800 px-20 py-6 flex flex-col">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* X logo */}
        <div className="flex justify-center mb-6">
          <img src={XLogo} alt="X" className="w-8 h-8" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Help us keep your account<br /> safe.
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-[15px] leading-6 mb-6">
          Verify your identity by entering the username associated with
          your X account. Your username starts with an @ symbol.
        </p>

        {/* Input */}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          placeholder="@username"
          className="
            w-full bg-black
            border border-gray-700
            rounded-lg px-4 py-4
            text-white placeholder-gray-500 text-[16px]
            focus:outline-none
            focus:border-[#1d9bf0]
            focus:ring-1 focus:ring-[#1d9bf0]"
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}

        {/* Links */}
        <div className="mt-4 space-y-3 text-[14px]">
          <a
            href="/help/en/additional-signup-login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1d9bf0] hover:underline cursor-pointer"
          >
            Why am I being asked for this information?
          </a>

          <p className="text-[#1d9bf0] mt-4 hover:underline cursor-pointer">
            Report a problem
          </p>
        </div>

        <div className="grow" />

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={!isValidUsername}
          className={`w-full h-14 rounded-full font-bold text-[17px]
            ${
              isValidUsername
                ? "bg-white text-black"
                : "bg-[#b2b1b5bc] text-black cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VerifyUsername;