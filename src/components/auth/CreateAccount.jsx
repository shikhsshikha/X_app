import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-black border border-gray-800 rounded-2xl p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold mb-2">
            Create your account
          </h1>
          <p className="text-sm text-gray-400">
            Join X today
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs text-gray-400 mb-1">
            Name
            </label>
            <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[#1d9bf0] focus:outline-none"
            />

          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs text-gray-400 mb-1">
            Email
            </label>
            <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[#1d9bf0] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="new-password" className="block text-xs text-gray-400 mb-1">
            Password
            </label>
            <input
            id="new-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[#1d9bf0] focus:outline-none"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Date of birth
            </label>
            <p className="text-xs text-gray-500 mb-2">
              This will not be shown publicly. Confirm your own age.
            </p>

            <div className="flex gap-3">
              <select className="flex-1 p-3 rounded-lg bg-black border border-gray-700 focus:border-[#1d9bf0]">
                <option>Month</option>
              </select>
              <select className="w-20 p-3 rounded-lg bg-black border border-gray-700 focus:border-[#1d9bf0]">
                <option>Day</option>
              </select>
              <select className="w-24 p-3 rounded-lg bg-black border border-gray-700 focus:border-[#1d9bf0]">
                <option>Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full h-12 mt-8 bg-white text-black rounded-full font-bold text-[15px] hover:bg-gray-200 transition">
          Create account
        </button>

        {/* Legal */}
        <p className="text-xs text-gray-500 leading-4 text-center mt-6">
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

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="w-full text-center text-sm text-[#1d9bf0] hover:underline mt-6"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
