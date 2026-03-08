import XLogo from "../../assets/logo-white.png";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const isValid = name && email && month && day && year;
  const navigate = useNavigate();

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => 2025 - i);

  const handleNext = () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please sign up first using Google or Apple");
      return;
    }

    // later: save data to Firestore
    console.log({
      uid: user.uid,
      name,
      email,
      dob: `${day}-${month}-${year}`,
    });

    navigate("/home");
  };

  return (
    <div className="fixed inset-0 z-9999 bg-black/50 flex items-center justify-center">
      <div className="relative w-150 bg-black rounded-2xl border border-gray-800 p-20">

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

        <h2 className="text-2xl font-bold text-white mb-6">
          Create your account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 bg-black border border-gray-700 rounded-lg px-4 py-4
                     text-white placeholder-gray-500
                     focus:outline-none focus:border-[#1d9bf0]"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 bg-black border border-gray-700 rounded-lg px-4 py-4
                     text-white placeholder-gray-500
                     focus:outline-none focus:border-[#1d9bf0]"
        />

        {/* DOB */}
        <p className="text-white font-semibold mb-1">Date of birth</p>
        <p className="text-gray-500 text-sm mb-4">
          This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
        </p>

        <div className="flex gap-3">
          {/* Month */}
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="flex-1 bg-black border border-gray-700 rounded-md px-4 py-3
                       text-white focus:outline-none focus:border-[#1d9bf0]"
          >
            <option value="">Month</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {/* Day */}
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-24 bg-black border border-gray-700 rounded-md px-3 py-3
                       text-white focus:outline-none focus:border-[#1d9bf0]"
          >
            <option value="">Day</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Year */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-28 bg-black border border-gray-700 rounded-md px-3 py-3
                       text-white focus:outline-none focus:border-[#1d9bf0]"
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Spacer */}
        <div className="h-10" />

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={!isValid}
          className={`w-full h-14 mt-10 rounded-full font-bold
            ${isValid
              ? "bg-white text-black"
              : "bg-[#b2b1b5bc] cursor-not-allowed"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;