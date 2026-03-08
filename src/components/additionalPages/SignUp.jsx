import XLogo from "../../assets/logo-white.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onClose, onCreateAccount }) => {

  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center">
      <div className="relative w-140 h-160 bg-black rounded-xl border border-gray-800 px-30 py-8">

        {/* Close */}
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

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Join X today
        </h2>

        {/* Google */}
        <button
          onClick={handleGoogleSignUp}
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

        {/* Apple */}
        <button
            onClick={() => {
                alert("Apple Sign-In requires Apple Developer account");
            }}
            className="w-full h-11 mt-3 bg-white text-black rounded-full
                        flex items-center justify-center gap-2
                        font-medium text-[15px] hover:bg-gray-200 transition"
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

        {/* Create Account */}
        <button
          onClick={onCreateAccount}
          className="w-full h-11 rounded-full bg-white text-black
                     font-bold text-[15px] hover:bg-gray-200 transition"
        >
          Create account
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
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

        <p className="text-center text-gray-500 text-sm mt-6">
          Have an account already?{" "}
          <span className="text-[#1d9bf0] hover:underline cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;