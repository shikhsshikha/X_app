import { Link } from "react-router-dom";
import XLogo from "../../assets/X-logo-black.png";
import XWhite from "../../assets/X-logo.png";

const HelpFooter = () => {
  return (
    <div className="min-h-screen bg-[#f7f9f9] text-black">

      {/* ===== Help Center Navbar ===== */}
      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="h-16 max-w mx-auto px-8 py-12 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center ml-6 mt-6 gap-2">
            <img src={XLogo} alt="X" className="h-6 w-auto" />
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


      {/* ===== Hero Section ===== */}
      <section className="relative bg-black h-120 flex items-center">
  
      {/* Left content */}
      <div className="relative z-10 max-w ml-40 px-6">
        <p className="text-white text-[24px] font-stretch-expanded font-bold mb-6">Welcome to X Help Center</p>
        <h1 className="text-white text-[56px] mb-10 leading-[1.1] font-extrabold max-w-130">
          What can we <br />
          help you find?
        </h1>

        {/* Search */}
        <div className="mt-8 w-190 bg-white relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-9  pl-4 pr-12 rounded-lg text-black text-sm focus:outline-1"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <img src="https://tse3.mm.bing.net/th/id/OIP.wf4rHk-gTkdRPti97-pdRAHaHa?pid=Api&P=0&h=180" alt="" className="w-5 h-5" />
          </span>
        </div>
      </div>

      {/* Right BIG X */}
      <img
        src={XWhite}
        alt="X background"
        className="absolute right-30 h-120 opacity-90"
      />

    </section>


      {/* ===== Download Buttons ===== */}
      <section className="max-w-7xl mx-40  px-6 py-8">
        <div className="flex flex-col  gap-6">
          <button className="px-8 py-3 bg-black text-white rounded-full font-semibold w-fit">
            Download X for iPhone
          </button>
          <button className="px-8 py-3 bg-black text-white rounded-full font-semibold w-fit">
            Download X for Android
          </button>
        </div>
      </section>

      {/* ===== Help Categories ===== */}
      <section className="max-w-6xl mx-45 px-6 py-10">
        <div className="grid md:grid-cols-2 gap-15 items-start">

          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-[#d1d9e0]">
            <div className="px-6 py-10 border-b border-[#d1d9e0] text-[23px] font-bold flex items-center gap-2">
              🔐 Managing your account
            </div>

            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">About suspended accounts</div>
            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">Help with locked or limited account</div>
            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">How to add your phone number</div>
            <div className="px-6 py-10 text-[#1d9bf0] text-[18px]">How to update your email address</div>

            <div className="px-6 py-8">
              <button className="px-5 py-2 border rounded-full text-sm font-semibold">
                See all articles
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-[#d1d9e0]">
            <div className="px-6 py-10 border-b border-[#d1d9e0] text-[23px] font-bold flex items-center gap-2">
              📱 Using X
            </div>

            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">How to Post</div>
            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">About X.com supported browsers</div>
            <div className="px-6 py-10 text-[#1d9bf0] text-[18px]">About Direct Messages</div>

            <div className="px-6 py-8">
              <button className="px-5 py-2 border rounded-full text-sm font-semibold">
                See all articles
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-[#d1d9e0]">
            <div className="px-6 py-10 border-b border-[#d1d9e0] text-[23px] font-bold flex items-center gap-2">
              🤳 Safety and security
            </div>

            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">How to protect your personal information</div>
            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">About public and protected Posts</div>
            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">Additional information sharing with business partners</div>
            <div className="px-6 py-10 text-[#1d9bf0] text-[18px]">Help with my compromised account</div>

            <div className="px-6 py-8">
              <button className="px-5 py-2 border rounded-full text-sm font-semibold">
                See all articles
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl border border-[#d1d9e0]">
            <div className="px-6 py-10 border-b border-[#d1d9e0] text-[23px] font-bold flex items-center gap-2">
              📝 Rules and Policies
            </div>

            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">How we enforce our rules</div>
            <div className="px-6 py-8 border-b border-[#d1d9e0] text-[#1d9bf0] text-[18px]">Notices on X and what they mean</div>
            <div className="px-6 py-10 text-[#1d9bf0] text-[18px]">How cookies are used on X</div>

            <div className="px-6 py-8">
              <button className="px-5 py-2 border rounded-full text-sm font-semibold">
                See all articles
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* ===== More Resources ===== */}
      <section className="bg-[#eef3f4]">
        <div className="max-w-7xl mx-40 px-6  py-50">

          <h2 className="text-[50px] font-bold -mt-20 text-black">
            More resources
          </h2>

          {[
            "X Handle Marketplace",
            "Premium Business",
            "Premium Organizations",
            "Affiliate Benefits",
          ].map((item) => (
            <div
              key={item}
              className="py-6 border-black/10 flex flex-col gap-6"
            >
              {/* Left */}
              <div>
                <h3 className="text-[30px] font-bold text-black leading-tight">
                  {item}
                </h3>
                <p className="text-[15px] text-black font-bold mt-1">
                  Posts
                </p>
              </div>

              {/* Right */}
              <span className="self-end text-[15px] font-semibold flex items-center gap-2 cursor-pointer hover:underline">
                Read more <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=1A1A1A" className="w-4 h-5" alt="" />
              </span>

            </div>
          ))}
        </div>
      </section>

      <section>
        <footer className="bg-[#0f1419]  px-20 py-21">
          <div className="grid grid-cols-5 text-[#A1A1A1] -mt-12 -mb-10 gap-12 text-sm">
            <div>
              <h4 className="text-[#A1A1A1] mb-5 font-extrabold ml-23">X platform</h4>
              <ul className="space-y-2 ml-23">
                <li>X.com</li>
                <li>Status</li>
                <li>Accessibility</li>
                <li>Embed a post</li>
                <li>Privacy Center</li>
                <li>Transparency Center</li>
                <li>Download the X app</li>
                <li>Try Grok.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#A1A1A1] mb-5 ml-7 font-extrabold">X Corp.</h4>
              <ul className="space-y-2 ml-7">
                <li>About the company</li>
                <li>Company news</li>
                <li>Brand toolkit</li>
                <li>Jobs and internships</li>
                <li>Investors</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#A1A1A1] mb-5 font-extrabold">Help</h4>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Using X</li>
                <li>X for creators</li>
                <li>Ads Help Center</li>
                <li>Managing your account</li>
                <li>Email Preference Center</li>
                <li>Rules and policies</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#A1A1A1] mb-5 -ml-9 font-extrabold">Developer resources</h4>
              <ul className="space-y-2 -ml-9">
                <li>Developer home</li>
                <li>Documentation</li>
                <li>Forums</li>
                <li>Communities</li>
                <li>Developer blog</li>
                <li>Engineering blog</li>
                <li>Developer terms</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#A1A1A1] mb-5 -ml-15 font-extrabold">Business resources</h4>
              <ul className="space-y-2 -ml-15">
                <li>Advertise</li>
                <li>X for business</li>
                <li>Resources and guides</li>
                <li>X for marketers</li>
                <li>Marketing insights</li>
                <li>Brand inspiration</li>
                <li>X Ads Academy</li>
              </ul>
            </div>

            <div className="col-span-5 ml-23 grid font-bold grid-cols-5 text-sm text-[#A1A1A1]">
              <span>© 2026 X Corp.</span>

              <span className="-ml-5">Cookies</span>

              <span className="-ml-12">Privacy</span>

              <span className="-ml-22">Terms and conditions</span>

              <span className="flex items-center gap-1 -ml-6">
                English <span className="text-[10px]">▾</span>
              </span>
            </div>
          </div>

        </footer>
      </section>

    </div>
  );
};

export default HelpFooter;
