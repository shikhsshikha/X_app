import XLogoBlack from "../../assets/X-logo-black.png";

const BrandFooter = () => {
  return (
    <>
      {/* ===== Sticky Top Brand Navbar ===== */}
      <header className="sticky top-0 z-50 bg-white ">
        <div className="flex items-center justify-between px-10 py-6">

          {/* Left */}
          <div className="flex items-center gap-3">
            <img src={XLogoBlack} alt="X" className="h-7 w-auto" />
            <span className="text-[23px] font-bold text-black">
              About
            </span>
          </div>

          {/* Right Nav */}
          <nav className="flex items-center gap-5 text-[13px] text-gray-700">
            <button className="hover:underline">
              Who we are ▾
            </button>
            <button className="hover:underline">
              Our priorities ▾
            </button>
            <button className="hover:underline">
              Resources ▾
            </button>

            <button className="ml-4 px-5 py-2 border rounded-full text-sm hover:bg-gray-100 transition">
              Go to X.com
            </button>
          </nav>
        </div>
      </header>

      <main className="w-full bg-white px-10 py-20">

        {/* ===== Hero (FULL WIDTH – NOT CENTERED) ===== */}
        <h1 className="text-[80px] font-extrabold font-stretch-ultra-expanded mt-40 text-[#0f1419]">
          Brand toolkit
        </h1>

        <p className="text-[22px] text-[#0f1419] font-bold mt-4">
          Your one-stop shop for X assets.
        </p>

        <div className="h-110"></div>

        {/* ===== CENTERED CONTENT WRAPPER ===== */}
        <div className="max-w-6xl mx-auto">

          {/* ===== X Logo ===== */}
          <section className="flex items-center justify-between py-14 border-b border-black/10">
            <div className="flex items-center gap-10">
              <img
                src={XLogoBlack}
                alt="X logo"
                className="w-40 h-40"
              />

              <div className="max-w-xl">
                <h3 className="text-[23px] font-bold text-[#0f1419] mb-2">
                  X logo
                </h3>
                <p className="text-[18px] text-[#0f1419] leading-7">
                  Our logo is our most recognizable asset. That’s why we’re so
                  protective of it. Take a moment to think about how you apply it.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1 px-4 py-2 border text-black rounded-full text-[18px] font-bold hover:bg-black/5">
              Download
              <span><img src="https://img.icons8.com/?size=100&id=20FjgTazh8FG&format=png&color=1A1A1A" className="w-8 h-7" alt="" /></span>
            </button>
          </section>

          {/* ===== Logo handle lockups ===== */}
          <section className="flex items-center justify-between py-14 border-b border-black/10">
            <div className="flex items-center gap-10">
              <img
                src={XLogoBlack}
                alt="Logo handle lockups"
                className="w-40 h-40"
              />

              <div className="max-w-xl">
                <h3 className="text-[23px] font-bold text-[#0f1419] mb-2">
                  Logo handle lockups
                </h3>
                <p className="text-[18px] text-[#0f1419] leading-7">
                  We’ve created these logo lockups with a username to make it easier
                  for you to show that your account is on X.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1 px-4 py-2 border text-black rounded-full text-[18px] font-bold hover:bg-black/5">
              Download
              <span><img src="https://img.icons8.com/?size=100&id=20FjgTazh8FG&format=png&color=1A1A1A" className="w-8 h-7" alt="" /></span>
            </button>
          </section>

          {/* ===== Logo partnership lockups ===== */}
          <section className="flex items-center justify-between py-14 border-b border-black/10">
            <div className="flex items-center gap-10">
              <img
                src={XLogoBlack}
                alt="Logo partnership lockups"
                className="w-40 h-40"
              />

              <div className="max-w-xl">
                <h3 className="text-[23px] font-bold text-[#0f1419] mb-2">
                  Logo partnership lockups
                </h3>
                <p className="text-[18px] text-[#0f1419] leading-7">
                  Use these to show your partnership with X.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1 px-4 py-2 border text-black rounded-full text-[18px] font-bold hover:bg-black/5">
              Download
              <span><img src="https://img.icons8.com/?size=100&id=20FjgTazh8FG&format=png&color=1A1A1A" className="w-8 h-7" alt="" /></span>
            </button>
          </section>

          {/* ===== Posts templates ===== */}
          <section className="flex items-center justify-between py-14 border-b border-black/10">
            <div className="flex items-center gap-10">
              <img
                src={XLogoBlack}
                alt="Posts templates"
                className="w-40 h-40"
              />

              <div className="max-w-xl">
                <h3 className="text-[23px] font-bold text-[#0f1419] mb-2">
                  Posts, posts, posts
                </h3>
                <p className="text-[18px] text-[#0f1419] leading-7">
                  Use these templates when you want to share a post. Always use real
                  posts and don’t alter or modify them in any way (not even with spell
                  check).
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1 px-4 py-2 border text-black rounded-full text-[18px] font-bold hover:bg-black/5">
              Download
              <span><img src="https://img.icons8.com/?size=100&id=20FjgTazh8FG&format=png&color=1A1A1A" className="w-8 h-7" alt="" /></span>
            </button>
          </section>

          {/* ===== Legal + Publishing ===== */}
          <section className="grid grid-cols-2 gap-30 pt-20 mt-20 mb-20">

            {/* Left */}
            <div>
              <h3 className="text-[23px] font-bold text-[#0f1419] mb-4">
                Legal disclaimer
              </h3>

              <p className="text-[18px] text-[#0f1419] leading-7">
                By using the X trademarks and resources on this site, you agree to
                follow the X Trademark Guidelines in{" "}
                <span className="underline cursor-pointer">
                  our Brand Guidelines
                </span>{" "}
                — as well as our Terms of Service and all other X rules and policies.
                If you have any questions, contact us at{" "}
                <strong>trademarks@x.com</strong>.
              </p>

              <p className="text-[12px] text-[#0f1419] mt-6">
                Please submit your request in English (non-English materials must come
                with translations).
              </p>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-[23px] font-bold text-[#0f1419] mb-4">
                Publishing a post or button?
              </h3>

              <p className="text-[18px] text-[#0f1419] leading-7 mb-6">
                Use embed codes to keep them working properly and looking their best.
              </p>

              <div className="space-y-4 text-[18px] font-medium">
                <div className="cursor-pointer text-black font-bold flex items-center gap-2">
                  Embed content →
                </div>
                <div className="cursor-pointer text-black font-bold flex items-center gap-2">
                  Custom post renderings →
                </div>
              </div>
            </div>

          </section>

        </div>
      </main>


      {/* ===== Footer (Exact Same) ===== */}
      <footer className="bg-[#0f1419] px-20 py-21">
        <div className="grid grid-cols-5 text-[#A1A1A1] -mt-12 -mb-10 gap-12 text-sm">

          <div>
            <h4 className="mb-5 font-extrabold ml-23">X platform</h4>
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
            <h4 className="mb-5 ml-7 font-extrabold">X Corp.</h4>
            <ul className="space-y-2 ml-7">
              <li>About the company</li>
              <li>Company news</li>
              <li>Brand toolkit</li>
              <li>Jobs and internships</li>
              <li>Investors</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-extrabold">Help</h4>
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
            <h4 className="mb-5 -ml-9 font-extrabold">Developer resources</h4>
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
            <h4 className="mb-5 -ml-15 font-extrabold">Business resources</h4>
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

          <div className="col-span-5 ml-23 grid grid-cols-5 text-sm font-bold text-[#A1A1A1] mt-10">
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
    </>
  );
};

export default BrandFooter;
