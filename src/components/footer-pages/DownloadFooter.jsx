import { Link } from "react-router-dom";
import XLogo from "../../assets/X-white.bg.png"; // adjust path if needed
import XBlack from "../../assets/X-logo-black.png";
import BaseFooter from "../BaseFooter";

const DownloadFooter = () => {
  return (
    <>
      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="h-14  px-8 py-11 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center ml-2 mt-6 gap-1">
            <img src={XLogo} alt="X" className="h-10 w-10" />
            <span className="text-[24px] font-bold text-black leading-none">
              Help Center
            </span>
          </div>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wider mt-6 font-medium text-black">
            <span className="hover:underline cursor-pointer">Using X</span>
            <span className="hover:underline cursor-pointer">Managing your account</span>
            <span className="hover:underline cursor-pointer">Safety and security</span>
            <span className="hover:underline cursor-pointer">Rules and policies</span>

            <span className="hover:underline cursor-pointer flex items-center gap-1">
              Resources
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=1A1A1A"
                className="h-2 w-2"
                alt=""
              />
            </span>

            {/* Right actions */}
            <div className="flex items-center mr-6 gap-2">
              <Link
                to="/signin"
                className="px-4 h-11 flex items-center justify-center rounded-full border border-black/20 text-[13px] font-medium hover:bg-black/5"
              >
                Sign in
              </Link>

              <button className="h-11 w-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5">
                <img
                  src="https://img.icons8.com/?size=100&id=7695&format=png&color=22C3E6"
                  className="w-5 h-5"
                  alt=""
                />
              </button>

              <button className="px-4 h-11 rounded-full border border-black/20 text-[14px] font-medium hover:bg-black/5">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="bg-white">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-10 pt-20">
          <h1 className="text-[69px] font-bold leading-18 text-[#0f1419]">
            Download the X app for iOS and Android
          </h1>

          <div className="mt-13 flex flex-col gap-6">
            <button className="w-fit px-8 py-3 rounded-full bg-[#0f1419] text-white text-[16px] font-bold hover:cursor-pointer">
              Download X for iOS
            </button>
            <button className="w-fit px-8 py-3 rounded-full bg-[#0f1419] text-white text-[16px] font-bold hover:cursor-pointer">
              Download X for Android
            </button>
          </div>

          <p className="mt-7 text-[19px] font-bold text-[#0f1419]">
            Download the X app on your device.
          </p>

          <p className="mt-6 text-[18px] leading-8 text-[#0f1419] max-w-4xl">
            The X app is the trusted global digital town square for everyone. With X, you can:
          </p>

          <ul className="mt-2 list-disc pl-6 space-y-3 text-lg text-[#0f1419] max-w-5xl">
            <li>Post content for the world to see and join public conversations</li>
            <li>Stay up to date on breaking news and follow your interests</li>
            <li>Stay better informed with extra context from Community Notes</li>
            <li>Go live with Spaces for audio</li>
            <li>Stream live videos including sports and watch game streamers</li>
            <li>Communicate privately with Direct Messages</li>
            <li>Subscribe to X Premium to expand your reach, get a blue checkmark, and more</li>
            <li>Earn a living creating exclusive content for your paid subscribers and share in the ad revenue generated in replies to your posts</li>
            <li>Create and join Communities around topics and interests, from sports to music to movies to technology</li>
            <li>Upload and watch videos up to 3 hours in length</li>
            <li>Write and read long form posts like essays, blogs, product reviews, and journalism</li>
            <li>Connect directly with your customers to help your business grow</li>
          </ul>
        </section>

        {/* iOS */}
        <section className="max-w-5xl mx-auto px-10 py-8">
          <h1 className="text-[35px]  font-bold   text-[#0f1419]">X app for iOS</h1>
          <div className="w-20 h-1.5 bg-[#0f7cc5] mt-3 mb-8" />

          <button className="px-9 py-3 rounded-full bg-[#0f1419] text-white text-[16px] font-bold mb-6">
            Download X for iOS
          </button>

          <p className="text-[18px] text-[#0f1419] leading-7 max-w-5xl">
            The X app for iOS is available for iPhone and iPad. Download the X app today to get started with X on your iPhone or iPad. 
          </p>
        </section>

        {/* ANDROID */}
        <section className="max-w-5xl mx-auto px-10 ">
          <h2 className="text-[35px] font-bold text-[#0f1419]">X app for Android</h2>
          <div className="w-20 h-1.5 bg-[#0f7cc5] mt-3 mb-8" />

          <button className="px-9 py-3 rounded-full bg-[#0f1419] text-white text-[16px] font-bold mb-6">
            Download X for Android
          </button>

          <p className="text-[18px] text-[#0f1419] leading-7 max-w-5xl mb-10">
            The X app for Android is available for Android phones and tablets. Download the Android app today to use X on your Android phone or tablet.


          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-10 pb-18">

          {/* Top divider */}
          <div className="border-t border-black/70 mb-2" />

          {/* FAQ heading */}
          <h2 className="text-[36px] font-extrabold text-[#0f1419]">
            FAQ
          </h2>
          <div className="w-20 h-1.5 bg-[#0f7cc5] mt-4 mb-10" />

          {/* FAQ quick links */}
          <div className="space-y-4 mb-8 leading-6 tracking-tight">
            <p className="text-[19px] text-[#1D9BF0] underline cursor-pointer">
              What devices does the X app for iOS and Android support?
            </p>
            <p className="text-[19px] text-[#1D9BF0] underline cursor-pointer">
              How much does the X app cost to download?
            </p>
            <p className="text-[19px] text-[#1D9BF0] underline cursor-pointer">
              Where do I sign up for X Premium?
            </p>
          </div>

          {/* FAQ answers */}
          <div className="max-w-xl space-y-8 ml-25 text-[23px]">

            {/* Answer 1 */}
            <div>
              <h3 className="font-bold text-[#0f1419] mb-3">
                What devices does the X app for iOS and Android support?
              </h3>
              <p className="text-[19px] text-[#0f1419] leading-8">
                The X app for iOS can be installed on iPhones and iPads. The X app for
                Android can be installed on most Android phones and tablets.
              </p>
            </div>

            {/* Answer 2 */}
            <div>
              <h3 className="font-bold text-[#0f1419] mb-3">
                How much does the X app cost to download?
              </h3>
              <p className="text-[19px] text-[#0f1419] leading-8">
                The X app is free to download and install on your device.
              </p>
            </div>

            {/* Answer 3 */}
            <div>
              <h3 className="font-bold text-[#0f1419] mb-3">
                Where is the X app available?
              </h3>
              <p className="text-[19px] text-[#0f1419] leading-8 mb-16">
                The X app is available in most countries around the world.
              </p>
            </div>
            <div className="border-t border-black/70" />

          </div>
        </section>

        {/* DOWNLOAD BUTTONS */}
        <section>
          <div className="flex flex-col gap-6 mx-70">
            <button className="w-fit px-8 py-3 rounded-full bg-[#0f1419] text-white text-[16px] font-bold hover:cursor-pointer">
              Download X for iOS
            </button>
            <button className="w-fit px-8 py-3 mb-18 rounded-full bg-[#0f1419] text-white text-[16px] font-bold hover:cursor-pointer">
              Download X for Android
            </button>
            <div className="border-t border-black/70 mb-2" />
          </div>
        </section>

        {/* SHARE */}
        <section className="max-w-5xl mx-auto px-10 py-13 mb-6">
          <h2 className="text-[33px] text-[#0f1419] font-bold mb-6">Share this article</h2>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#E6ECF0] text-[16px] font-semibold text-[#0f1419]">
            <img
              src={XBlack}
              alt="X"
              className="h-4 w-4"
            />
            Post
          </button>
        </section>
      </main>

      {/* Footer */}
      <BaseFooter />
    </>
  );
};

export default DownloadFooter;
