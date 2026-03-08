import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, appleProvider } from "../firebase";

const AuthButtons = ({ onSignupSuccess }) => {

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onSignupSuccess(); // 🔥 open VerifyUsername
    } catch (err) {
      console.log("Google popup closed");
    }
  };

  const handleAppleSignup = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      onSignupSuccess(); // 🔥 same flow
    } catch (err) {
      console.log("Apple popup closed");
    }
  };

  return (
    <>
      {/* GOOGLE */}
      <button
        onClick={handleGoogleSignup}
        className="w-full md:w-75 h-10 bg-white text-black rounded-full
                   flex items-center justify-center gap-2
                   font-medium text-[14px]
                   hover:bg-[#d7ebff] cursor-pointer transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-5"
          alt="Google"
        />
        Sign up with Google
      </button>

      {/* APPLE */}
      <button
        onClick={handleAppleSignup}
        className="w-full md:w-75 h-10 bg-white text-black rounded-full
                   flex items-center justify-center gap-2
                   font-medium text-[14px]
                   hover:bg-gray-200 cursor-pointer transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          className="w-4"
          alt="Apple"
        />
        Sign up with Apple
      </button>
    </>
  );
};

export default AuthButtons;