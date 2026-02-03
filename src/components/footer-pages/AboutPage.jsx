import XLogoBlack from "../../assets/X-logo-black.png";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex mt-4 ml-3 items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <img
            src={XLogoBlack}
            alt="X"
            className="h-7 w-auto"
          />

          <span className="text-[23px] font-bold text-black">About</span>
        </div>

        <nav className="flex items-center gap-5 text-[13px] text-gray-700">
          <button>Who we are ▾</button>
          <button>Our priorities ▾</button>
          <button>Resources ▾</button>

          <button className="ml-4 px-5 py-2 border rounded-full text-sm hover:bg-gray-100 transition">
            Go to X.com
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center -mt-3.5 py-32">
        <img
        src={XLogoBlack}
        alt="X"
        className="w-95 h-auto select-none"
        />


      </section>

      <footer className="bg-[#0f1419]  px-20 py-21">
        <div className="grid grid-cols-5 text-[#c2c7cd] -mt-12 -mb-10 gap-12 text-sm">
          <div>
            <h4 className="text-white mb-5 font-semibold ml-23">X platform</h4>
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
            <h4 className="text-white mb-5 ml-7 font-semibold">X Corp.</h4>
            <ul className="space-y-2 ml-7">
              <li>About the company</li>
              <li>Company news</li>
              <li>Brand toolkit</li>
              <li>Jobs and internships</li>
              <li>Investors</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-5 font-semibold">Help</h4>
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
            <h4 className="text-white mb-5 -ml-9 font-semibold">Developer resources</h4>
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
            <h4 className="text-white mb-5 -ml-15 font-semibold">Business resources</h4>
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

          <div className="col-span-5 ml-23 grid font-bold grid-cols-5 text-sm text-[#c2c7cd]">
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
    </div>
  );
};

export default AboutPage;
