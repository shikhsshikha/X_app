import XLogo from "../../assets/logo-white.png";
import marketingHeroImg from "../../assets/marketing-hero.webp";
import nextersImg from "../../assets/customer-nexters.jpg";
import codefinityImg from "../../assets/customer-codefinity.jpeg";
import jarirImg from "../../assets/customer-jarir.jpg";
import BaseFooter from "../BaseFooter";

const MarketingFooter = () => {
  return (
    <section className="w-full bg-black">

      <section className="border-b border-white/20">
        <div className="max-w-full mx-5 h-16 flex items-center justify-between text-white">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img src={XLogo} alt="X Logo" className="h-6 w-6" />
            <span className="text-md font-bold">Business</span>
          </div>

          {/* CENTER */}
          <nav className="flex items-center gap-8 ml-100 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-white">Basics</span>
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                className="h-4 w-4"
                alt=""
              />
            </div>

            <div className="flex items-center gap-1">
              <span className="relative text-white">
                Advertising
              </span>
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                className="h-4 w-4"
                alt=""
              />
            </div>

            <div className="flex items-center gap-1">
              <span className="text-white">Products</span>
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                className="h-4 w-4"
                alt=""
              />
            </div>

            <span className="text-white">Resources</span>
            <span className="text-white">Help Center</span>
            <span className="text-white">Premium Business</span>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-1.5 rounded-full border font-bold border-white/40 text-[15px] hover:bg-slate-700">
              Sign In
            </button>

            <img
              src="https://img.icons8.com/?size=100&id=59878&format=png&color=FFFFFF"
              alt="Search"
              className="h-8 w-8 bg-white/10 rounded-full p-2 hover:bg-slate-700"
            />

            <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-bold">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="w-full  text-white">
        <div className="max-w-full  px-38 py-8">
          <div className="flex items-center justify-between gap-10">

            {/* ================= LEFT CONTENT ================= */}
            <div className="max-w-xl">
              <h1 className="text-[64px] leading-[1.1] tracking-wide font-bold mb-8">
                Increase sales
                <br />
                with X Ads
              </h1>

              <p className="text-white tracking-wide text-xl leading-relaxed mb-6">
                Create powerful ads. Attract the right customers. Watch
                <br />
                your business grow.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex items-center gap-5">
                <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:opacity-90 transition">
                  Get Started
                </button>

                <button className="px-5 py-2.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-slate-800 transition">
                  Talk To An Expert
                </button>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="shrink-0">
              <img
                src={marketingHeroImg}
                alt="X Ads examples"
                className="max-w-150 w-full h-auto"
              />
            </div>

          </div>
        </div>
      </section>


      <section className="w-full bg-black text-white py-22">
        <div className="max-w-full  px-38">

          {/* TEXT */}
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[44px] font-bold tracking-normal mb-4">
              Insights in your inbox
            </h2>

            <p className="text-white text-lg">
              Sign up for updates on products, tips, and more.
            </p>
          </div>

          {/* FORM */}
          <div className="flex items-start gap-4">

            {/* Email */}
            <div className="flex flex-col ml-26">
              <input
                type="email"
                placeholder="Email address"
                className="
                  w-100
                  px-3 py-3
                  rounded-md
                  bg-black
                  border
                  border-gray-400
                  text-gray-400
                  placeholder-white/60
                  focus:outline-none
                  focus:border-white/40
                  hover:border-blue-400
                "
              />

              <p className="text-[10px] text-gray-400 mt-2 max-w-sm">
                Sign up to receive updates and marketing communications from us and our
                partners. Unsubscribe anytime.
              </p>
            </div>

            {/* Country */}
            <div className="relative">
              <select
                className="
                  w-100
                  px-3 py-3
                  rounded-md
                  bg-black
                  border
                  border-gray-400
                  text-gray-400
                  appearance-none
                  focus:outline-none
                  focus:border-white/40
                "
              >
                <option>Country</option>
              </select>

              {/* Dropdown Arrow */}
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                alt=""
                className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 opacity-80 pointer-events-none"
              />
            </div>

            {/* Submit */}
            <button
              className="
                px-5 py-3
                rounded-full
                bg-white
                text-black
                font-bold
                text-sm
                hover:opacity-90
                transition
              "
            >
              Submit
            </button>
          </div>

        </div>
      </section>


      <section className="w-full bg-black text-white py-8">
        <div className="max-w-full  px-38">

          {/* HEADING */}
          <h2 className="text-[45px] font-bold tracking-tight mb-12">
            Why X Ads?
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-3 gap-10">

            {/* ================= CARD 1 ================= */}
            <div
              className="
                group relative rounded-md p-8
                shadow-[0_0_10px_rgba(255,255,255,0.18)]
                transition-all duration-100
                hover:-translate-y-3
                hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
              "
            >
              {/* VISUAL */}
              <div className="relative mb-10 h-48 rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)]" />
                <div className="w-20 h-20 rounded-xl border border-white/20 flex items-center justify-center text-3xl font-bold">
                  AI
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">
                AI-powered advertising
              </h3>

              <p className="text-white text-[16px] tracking-tight leading-relaxed mb-10">
                Let our AI do the hard work. It targets the users most likely to love
                your ads, saving you time and boosting your results.
              </p>

              {/* ARROW */}
              <div className="absolute bottom-8 right-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg group-hover:bg-white/20 transition">
                  →
                </div>
              </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div
              className="
                group relative rounded-md p-8
                shadow-[0_0_10px_rgba(255,255,255,0.18)]
                transition-all duration-100
                hover:-translate-y-3
                hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
              "
            >
              {/* VISUAL */}
              <div className="relative mb-10 h-48 rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,120,255,0.25),transparent_60%)]" />
                <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">
                Extend your influence
              </h3>

              <p className="text-white tracking-wide text-[16px] leading-relaxed mb-14">
                Reach your audience anywhere from your local community to worldwide,
                with precise geographic targeting.
              </p>

              {/* ARROW */}
              <div className="absolute bottom-8 right-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg group-hover:bg-white/20 transition">
                  →
                </div>
              </div>
            </div>

            {/* ================= CARD 3 ================= */}
            <div
              className="
                group relative rounded-md p-8
                shadow-[0_0_10px_rgba(255,255,255,0.18)]
                transition-all duration-100
                hover:-translate-y-3
                hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
              "
            >
              {/* VISUAL */}
              <div className="relative mb-10 h-48 rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                <svg
                  className="w-full h-full opacity-70"
                  viewBox="0 0 300 200"
                  fill="none"
                >
                  <path
                    d="M10 160 C80 40, 220 40, 290 160"
                    stroke="white"
                    strokeOpacity="0.4"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 40 C80 160, 220 160, 290 40"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Smart spend, better returns
              </h3>

              <p className="text-white/80 leading-relaxed mb-14">
                Set your budget, and ensure you get maximum conversions at the lowest
                cost, making every dollar count.
              </p>

              {/* ARROW */}
              <div className="absolute bottom-8 right-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg group-hover:bg-white/20 transition">
                  →
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="flex justify-center gap-6 mt-10">
            <button className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:opacity-90 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-slate-800 transition">
              Talk To An Expert
            </button>
          </div>
        </div>
      </section>


      <section className="w-full bg-black text-white py-22">
        <div className="max-w-full px-38">

          {/* HEADING */}
          <h2 className="text-[43px] font-bold tracking-normal mb-12">
            Customer success stories
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-3 gap-10">

            {/* ================= CARD 1 ================= */}
            <div
              className="
                group relative h-120 rounded-md overflow-hidden
                transition-all duration-100
                hover:-translate-y-1
                hover:shadow-[0_0_10px_rgba(255,255,255,0.18)]
              "
            >
              <img
                src={nextersImg}
                alt="Nexters"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-20 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Nexters
                </h3>

                <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                  Game developer grows ROAS by 58% using sales campaigns and device targeting.
                </p>
              </div>

              {/* ARROW */}
              <div className="absolute bottom-6 right-6">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-lg group-hover:bg-white/20 transition">
                  →
                </div>
              </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div
              className="
                group relative h-120 rounded-md overflow-hidden
                transition-all duration-100
                hover:-translate-y-1
                hover:shadow-[0_0_10px_rgba(255,255,255,0.18)]
              "
            >
              <img
                src={codefinityImg}
                alt="Codefinity"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-20 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Codefinity
                </h3>

                <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                  X ads deliver 80% lower CPM for tech education innovator with keyword targeting.
                </p>
              </div>

              {/* ARROW */}
              <div className="absolute bottom-6 right-6">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-lg group-hover:bg-white/20 transition">
                  →
                </div>
              </div>
            </div>

            {/* ================= CARD 3 ================= */}
            <div
              className="
                group relative h-120 rounded-md overflow-hidden
                transition-all duration-100
                hover:-translate-y-1
                hover:shadow-[0_0_10px_rgba(255,255,255,0.18)]
              "
            >
              <img
                src={jarirImg}
                alt="Jarir Bookstore"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-20 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Jarir Bookstore
                </h3>

                <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                  E-commerce company reduced cost per site visit by 51% with Collection Ads on X.
                </p>
              </div>

              {/* ARROW */}
              <div className="absolute bottom-6 right-6">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-lg group-hover:bg-white/20 transition">
                  →
                </div>
              </div>
            </div>

          </div>

          {/* CTA BUTTONS */}
          <div className="flex justify-center gap-4 mt-10">
            <button className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:opacity-90 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-slate-800 transition">
              Talk To An Expert
            </button>
          </div>
        </div>
      </section>


      <section className="w-full bg-black text-white py-8 pb-20">
        <div className="max-w-full px-38">

          {/* CONTENT */}
          <div className="max-w-2xl">
            <h2 className="text-[43px] font-bold tracking-normal mb-2">
              Ready to get started?
            </h2>

            <p className="text-white/90 text-md leading-normal mb-10">
              Speak with an X Ads expert to tailor your campaigns for the best possible ROI<br />
              and unlock the full potential of your advertising efforts.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:opacity-90 transition">
                Get Started
              </button>

              <button className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-slate-800 transition">
                Talk To An Expert
              </button>
            </div>
          </div>

        </div>
      </section>

      <BaseFooter />
    </section>
  );
};

export default MarketingFooter;