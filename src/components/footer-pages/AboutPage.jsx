import { useState } from "react";
import XLogoBlack from "../../assets/X-logo-black.png";
import BaseFooter from "../BaseFooter";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white">

      {/* Navbar */}
      <header className="flex mt-4 ml-3 items-center justify-between px-6 md:px-10 py-6">

        <div className="flex items-center gap-3">
          <img src={XLogoBlack} alt="X" className="h-7 w-auto" />
          <span className="text-[23px] font-bold text-black">About</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-gray-700 relative">

          {/* Who we are */}
          <div className="relative group">
            <button className="flex items-center gap-1 pb-1">
              Who we are
              <img
                src="https://img.icons8.com/?size=100&id=HqE81NCGcYux&format=png&color=1A1A1A"
                className="w-3"
                alt=""
              />
            </button>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-xl p-6 w-52 z-50">

              <ul className="space-y-4">

                <li>
                  <Link
                    to="/careers"
                    className="hover:underline text-gray-800"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    to="/brand"
                    className="hover:text-black"
                  >
                    Brand toolkit
                  </Link>
                </li>

              </ul>

            </div>
          </div>


          {/* Our priorities */}
          <div className="relative group">

            <button className="flex items-center gap-1 pb-1">
              Our priorities
              <img
                src="https://img.icons8.com/?size=100&id=HqE81NCGcYux&format=png&color=1A1A1A"
                className="w-3"
                alt=""
              />
            </button>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-xl p-6 w-56 z-50">

              <ul className="space-y-4">

                <li>
                  <Link to="/privacy" className="hover:text-black">
                    Security and privacy
                  </Link>
                </li>

                <li>
                  <Link to="/privacy" className="hover:text-black">
                    Civic integrity
                  </Link>
                </li>

              </ul>

            </div>
          </div>


          {/* Resources */}
          <div className="relative group">

            <button className="flex items-center gap-1 pb-1">
              Resources
              <img
                src="https://img.icons8.com/?size=100&id=HqE81NCGcYux&format=png&color=1A1A1A"
                className="w-3"
                alt=""
              />
            </button>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-xl p-6 w-60 z-50">

              <ul className="space-y-4">

                <li>
                  <Link to="/help" className="hover:text-black">
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link to="/privacy" className="hover:text-black">
                    Privacy Center
                  </Link>
                </li>

                <li>
                  <Link to="/advertising" className="hover:text-black">
                    Advertisers
                  </Link>
                </li>

                <li>
                  <Link to="/developers" className="hover:text-black">
                    Developers
                  </Link>
                </li>

                <li>
                  <Link to="/blog" className="hover:text-black">
                    Company updates
                  </Link>
                </li>

                <li>
                  <Link to="/blog" className="hover:text-black">
                    Lobbying disclosures
                  </Link>
                </li>

              </ul>

            </div>
          </div>


          {/* Go to X.com */}
          <Link
            to="/"
            className="ml-4 px-5 py-2 border rounded-full text-sm hover:bg-gray-100 transition"
          >
            Go to X.com
          </Link>

        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl text-black"
        >
          ☰
        </button>

      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 px-6 pt-8">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-10">
            <span className="text-xl text-black font-bold">About</span>

            <button
              onClick={() => setMenuOpen(false)}
              className="border border-yellow-500 text-black p-1 rounded"
            >
              ✕
            </button>
          </div>

          {/* Menu links */}
          <div className="flex flex-col gap-6 text-lg text-gray-700">

            <button className="flex justify-between">
              Who we are <span>›</span>
            </button>

            <button className="flex justify-between">
              Our priorities <span>›</span>
            </button>

            <button className="flex justify-between">
              Resources <span>›</span>
            </button>

            <button className="mt-6 px-4 py-2 border rounded-full w-fit text-sm">
              Go to X.com
            </button>

          </div>

        </div>
      )}

      {/* Hero */}
      <section className="flex items-center justify-center py-24 md:py-32">
        <img
          src={XLogoBlack}
          alt="X"
          className="w-65 md:w-95 h-auto select-none"
        />
      </section>

      <BaseFooter />

    </div>
  );
};

export default AboutPage;