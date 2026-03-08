import { signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

const SignupGoogle = () => {
  const handleGoogleSignup = () => {
    // 🔥 EXACTLY like real social media apps
    signInWithRedirect(auth, googleProvider);
  };

  return (
    <button
      onClick={handleGoogleSignup}
      className="w-full h-12 bg-white text-black rounded-full
                 flex items-center justify-center gap-3
                 font-semibold text-[15px]
                 hover:bg-gray-100 transition"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        className="w-5 h-5"
        alt="Google"
      />
      Continue with Google
    </button>
  );
};

export default SignupGoogle;