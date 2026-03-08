import XLogo from "../../assets/X-white.bg.png";
import XBlack from "../../assets/X-logo-black.png";
import { Link } from "react-router-dom";
import BaseFooter from "../BaseFooter";

const AdditionalSignupLoginHelp  = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white ">
        <div className="h-16 max-w mx-auto px-8 py-12 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center ml-6 mt-6 gap-2">
            <img src={XLogo} alt="X" className="h-9 w-9" />
            <span className="text-[23px] font-bold text-black leading-none">
              Help Center
            </span>
          </div>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] mt-6 font-medium text-black">
            <span className="hover:underline cursor-pointer">Using X</span>
            <span className="hover:underline cursor-pointer">Managing your account</span>
            <span className="hover:underline cursor-pointer">Safety and security</span>
            <span className="hover:underline cursor-pointer">Rules and policies</span>
            <span className="hover:underline cursor-pointer flex items-center gap-1">
              Resources
              <span className="text-[10px]"><img src="https://img.icons8.com/?size=100&id=15810&format=png&color=1A1A1A" className="h-2 w-2" alt="" /></span>
            </span>

            {/* Right actions */}
            <div className="flex items-center  mr-8 gap-4">
              <Link
                to="/signin"
                className="px-6 h-12 flex items-center justify-center rounded-full border border-black/20 text-[13px] font-medium hover:bg-black/5"
              >
                Sign in
              </Link>

              {/* Search */}
              <button className="h-12 w-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5">
                <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=22C3E6" className="w-5 h-5" alt="" />
              </button>

              <button className="px-6 h-12 rounded-full border border-black/20 text-[14px] font-medium hover:bg-black/5">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-70 px-6 py-12">
        {/* Breadcrumb */}
        <p className="text-sm text-black mb-6">
          Help Center &gt; Login and password &gt; About additional sign up and log in details
        </p>

        {/* Title */}
        <h1 className="text-7xl font-bold leading-tighter tracking-tight mb-10">
          About additional sign up<br />
          and log in details
        </h1>

        <hr className="mb-10" />

        {/* Body text */}
        <div className="space-y-3 max-w-3xl ml-20 mt-20 text-[18px] leading-7 text-gray-800">
          <p>
            In order to keep X safe, we may ask certain users to provide additional information when signing up or logging in.
          </p>

          <p>
            For example, when signing up for a new account, you may be asked to{' '}
            <span className="text-[#1d9bf0] underline  hover:cursor-pointer">provide a phone number</span>{' '}
            and/or an email address.
          </p>

          <p>
            When logging in to an existing account, we may ask you to answer a question about your account that only you know.
            In some cases, we may also email you a code that you can use to verify your identity and log in to your account.
          </p>
        </div>

        <div>
            <h1 className="font-bold leading-tighter text-3xl tracking-tight max-w-3xl ml-20 mt-10">Need help?</h1>

            <p className="max-w-3xl ml-20 mt-10 text-[18px] leading-7 text-gray-800">
                If you are unable to provide the requested information and need assistance setting up your account, <span className="text-[#1d9bf0] underline  hover:cursor-pointer">please contact our support team</span>.
            </p>
            <hr className="mb-10 mt-15 w-185 ml-20" />
        </div>

        <h1 className="font-bold leading-tighter text-4xl tracking-tight max-w-3xl ml-20 mt-10">Share this article</h1>

        <button className="flex items-center gap-2 ml-20 mt-8 mb-30 px-6 py-3 rounded-full bg-[#E6ECF0] text-[16px] font-semibold text-[#0f1419] hover:cursor-pointer hover:bg-gray-300">
            <img
                src={XBlack}
                alt="X"
                className="h-4 w-4"
            />
                Post
        </button>

      </main>
        <BaseFooter />
    </div>
  );
};

export default AdditionalSignupLoginHelp ;
