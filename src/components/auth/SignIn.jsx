import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-black border border-gray-800 rounded-2xl p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold mb-2">
            Sign in to X
          </h1>
          <p className="text-sm text-gray-400">
            Welcome back
          </p>
        </div>

        <div className="space-y-5">
          
          <div>
            <label
            htmlFor="identifier"
            className="block text-xs text-gray-400 mb-1"
            >
            Phone, email, or username
            </label>
            <input
            id="identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            placeholder="Enter your phone, email, or username"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 outline-none focus:border-[#1d9bf0]"
            />

          </div>

          {/* Password */}
          <div>
            <label
            htmlFor="password"
            className="block text-xs text-gray-400 mb-1"
            >
            Password
            </label>
            <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 outline-none focus:border-[#1d9bf0]"
            />
          </div>
        </div>

        <button className="w-full h-12 mt-8 bg-white text-black rounded-full font-bold text-[15px] hover:bg-gray-200 transition">
          Sign in
        </button>

        <div className="flex justify-between mt-4 text-sm text-[#1d9bf0]">
          <span className="hover:underline cursor-pointer">
            Forgot password?
          </span>

          <span
            onClick={() => navigate("/signup")}
            className="hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </div>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

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

export default SignIn;
