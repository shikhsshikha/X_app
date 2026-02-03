import { useNavigate } from "react-router-dom";

const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <>
      <button 
        onClick={() => navigate("/signup/google")}
        className="w-75 h-10 bg-white text-black rounded-full flex items-center justify-center gap-2 font-medium text-[14px] hover:bg-[#d7ebff] cursor-pointer transition"

        >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-5"
          alt="Google"
        />
        Sign up with Google
      </button>

      <button 
        onClick={() => navigate("/signup/apple")}
        className="w-75 mb-2 h-10 bg-white text-black rounded-full flex items-center justify-center gap-2 font-medium text-[14px] hover:bg-gray-200 cursor-pointer transition">
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
