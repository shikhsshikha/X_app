import { useNavigate } from "react-router-dom";

const SignupApple = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-black border border-gray-800 rounded-2xl p-8 shadow-xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold mb-2">
            Sign up with Apple
          </h1>
          <p className="text-sm text-gray-400">
            Continue to X using your Apple ID
          </p>
        </div>

        {/* Apple Button */}
        <button className="w-full h-12 bg-white text-black rounded-full flex items-center justify-center gap-3 font-semibold text-[15px] hover:bg-gray-200 transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            className="w-4 h-4"
            alt="Apple"
          />
          Continue with Apple
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

        {/* Apple privacy note */}
        <p className="text-xs text-gray-500 leading-4 text-center mb-6">
          Your Apple ID information is used to sign you in securely.
          X does not store your Apple password.
        </p>

        {/* Back */}
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

export default SignupApple;
