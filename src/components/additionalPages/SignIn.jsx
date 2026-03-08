import XLogo from "../../assets/logo-white.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onClose, onOpenSignUp }) => {

  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      if (result.user) {
        onClose();
        navigate("/home");
      }

    } catch (err) {
      console.log(err);
    }
  };

  const handleUsernameLogin = () => {

    if (!username.startsWith("@") || username.length < 6) {
      setErrorMsg("Username should start with @ and be at least 6 characters");
      return;
    }

    setErrorMsg("");

    localStorage.setItem("usernameLoggedIn", username);

    onClose();
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center">

      <div className="relative w-140 h-160 bg-black rounded-xl border border-gray-800 px-30 py-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={XLogo} alt="X" className="w-8 h-8" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Sign in to X
        </h2>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full h-11 bg-white text-black rounded-full
                     flex items-center justify-center gap-2
                     font-medium text-[15px]
                     hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
            alt="Google"
          />
          Sign in with Google
        </button>

        {/* Apple Sign In */}
        <button
          onClick={() =>
            alert("Apple Sign-In requires Apple Developer account")
          }
          className="w-full h-11 mt-3 bg-white text-black rounded-full
                     flex items-center justify-center gap-2
                     font-medium text-[15px]
                     hover:bg-gray-200 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            className="w-4"
            alt="Apple"
          />
          Sign in with Apple
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Username Input */}
        <input
          type="text"
          placeholder="@username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-black border border-gray-700 rounded-lg
                     px-4 py-3 text-white placeholder-gray-500
                     focus:outline-none focus:border-[#1d9bf0]"
        />

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-500 text-xs mt-2">
            {errorMsg}
          </p>
        )}

        {/* Next Button */}
        <button
          onClick={handleUsernameLogin}
          className="w-full h-11 mt-6 rounded-full bg-white text-black
                     font-bold text-[15px]
                     hover:bg-gray-200 transition"
        >
          Next
        </button>

        {/* Forgot Password */}
        <button
          className="w-full h-11 mt-3 rounded-full
                     border border-gray-700 text-white
                     font-bold text-[15px]
                     hover:bg-white/10 transition"
        >
          Forgot password?
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={onOpenSignUp}
            className="text-[#1d9bf0] hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignIn;