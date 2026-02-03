import { useNavigate } from "react-router-dom";
import XLogo from "../../assets/X-logo.png";

const SignupGoogle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      
      <div className="relative w-full max-w-md bg-black border border-gray-800 rounded-3xl p-10 shadow-2xl">
        
        {/* X Logo */}
        <div className="flex justify-center mb-6">
        <img
            src={XLogo}
            alt="X"
            className="w-10 h-10"
        />
        </div>


        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-extrabold tracking-tight mb-2">
            Sign up with Google
          </h1>
          <p className="text-sm text-gray-400">
            Continue to X using your Google account
          </p>
        </div>

        <button
          className="w-full h-12 bg-white text-black rounded-full
                     flex items-center justify-center gap-3
                     font-semibold text-[15px]
                     hover:bg-gray-100 active:scale-[0.99]
                     transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Continue with Google
        </button>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-[11px] text-gray-500 uppercase tracking-wider">
            Or
          </span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

        <p className="text-[12px] text-gray-500 leading-5 text-center mb-8">
          By continuing, you agree to X’s{" "}
          <span className="text-[#1d9bf0] hover:underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-[#1d9bf0] hover:underline cursor-pointer">
            Privacy Policy
          </span>
          . X will never post to Google without your permission.
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full text-center text-sm text-[#1d9bf0] hover:underline"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
};

export default SignupGoogle;
