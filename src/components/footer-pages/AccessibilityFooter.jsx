import { Link } from "react-router-dom";
import XLogo from "../../assets/X-logo-black.png";

const AccessibilityFooter = () => {
  return (
    <div className="w-full bg-white">

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white">
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
                  <span className="cursor-pointer flex items-center gap-1 underline underline-offset-8  decoration-[#1d9bf0] decoration-2">
                    Resources
                    <span className="text-[10px]">
                      <img
                        src="https://img.icons8.com/?size=100&id=15810&format=png&color=1A1A1A"
                        className="h-2 w-2"
                        alt=""
                      />
                    </span>
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

      {/* PAGE CONTENT */}
      <main className="max-w-7xl mx-40 bg-white px-10 py-16 mt-8 mb-20">

        <h1 className="text-[66px] font-bold text-[#0f1419]">
          Accessibility at X
        </h1>

        <hr className="my-5 border-black/40 " />

        <p className="text-[18px] text-[#0f1419] leading-7 mt-8 max-w-7xl">
          Here at X, our mission is to give <strong>everyone</strong> the power to
          create and share ideas and information instantly{" "}
          <strong>without barriers</strong>, including people with
          disabilities/Disabled people. We have a dedicated group of
          cross-functional inclusive designers and engineers, with and without
          lived experience of disability, focused on providing the best
          experience regardless of device, platform, or disability by
          incorporating established guidelines and best practices.
        </p>

        {/* Section */}
        <section className="mt-7">
          <h2 className="text-[34px] font-bold  text-[#0f1419]">
            Accessibility features
          </h2>
          <div className="w-18 h-1.5 bg-[#0f7cc5] mt-3 mb-7" />

          <p className="text-[18px] text-[#0f1419] leading-7 max-w-7xl mb-10">
            While we know that our work never stops, here are just some of the
            ways we have worked toward improving the accessibility of X for
            various disabilities.
          </p>

          {/* Visual */}
          <div className="mb-10">
            <h3 className="text-[23px] font-bold text-[#0f1419] mb-3">Visual</h3>
            <ul className="list-disc pl-6 space-y-2 text-[18px] text-[#0f1419]">
              <li>Screen reader and refreshable braille display support</li>
              <li>Font size and high contrast settings</li>
              <li>Dark mode support, with themes for dim or lights out</li>
            </ul>
          </div>

          {/* Auditory */}
          <div className="mb-10">
            <h3 className="text-[23px] font-bold mb-3 text-[#0f1419]">Auditory</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#0f1419] text-[18px]">
              <li>
                Auto-caption support for{" "}
                <span className="text-[#1d9bf0] underline cursor-pointer">videos</span>,{" "}
                <span className="text-[#1d9bf0] underline cursor-pointer">X Spaces</span>{" "}
                and{" "}
                <span className="text-[#1d9bf0] underline cursor-pointer">
                  voice posts
                </span>
              </li>
              <li>
                <span className="text-[#1d9bf0] underline cursor-pointer">
                  Upload caption files (SRT)
                </span>{" "}
                for videos posted via posts on the web
              </li>
              <li>Turn on sounds</li>
            </ul>
          </div>

          {/* Mobility */}
          <div className="mb-10">
            <h3 className="text-[23px] font-bold mb-3 text-[#0f1419]">Mobility</h3>
            <ul className="list-disc pl-6 space-y-2 text-[18px] text-[#0f1419]">
              <li>Keyboard shortcuts</li>
              <li>
                Switch device, Voice Control (iOS), and Voice Access (Android)
                support
              </li>
              <li>Custom Magic Tap shortcuts (iOS)</li>
            </ul>
          </div>

          {/* Cognitive */}
          <div className="mb-10">
            <h3 className="text-[23px] font-bold mb-3 text-[#0f1419]">Cognitive</h3>
            <ul className="list-disc pl-6 space-y-2 text-[18px] text-[#0f1419]">
              <li>Reduce motion/animation settings</li>
              <li>Prevent video autoplay</li>
              <li>Turn off sounds</li>
            </ul>
          </div>

          {/* Link */}
          <p className="text-[18px] mt-6 text-[#0f1419]">
            For more information on accessibility features, see{" "}
            <span className="text-[#1d9bf0] underline cursor-pointer">
              Accessibility features of X
            </span>
            .
          </p>
        </section>

        {/* Software requirements */}
        <section className="mt-8">
          <h2 className="text-[34px] font-bold  text-[#0f1419]">
            Software requirements
          </h2>
          <div className="w-18 h-1.5 bg-[#0f7cc5] mt-3 mb-7" />

          <p className="text-[18px] text-[#0f1419] leading-7 max-w-7xl mb-4">
            In order to get the best accessible experience, we recommend that you
            use the most current versions of relevant software:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-[18px] text-[#0f1419] -mb-14">
            <li>Latest operating system version</li>
            <li>Latest assistive technology version</li>
            <li>Latest version of X on iOS or Android</li>
            <li>Latest browser version</li>
          </ul>
        </section>

        {/* Accessibility consultant support */}
        <section className="mt-20">
          <h2 className="text-[34px] font-bold  text-[#0f1419]">
            Accessibility consultant support
          </h2>
          <div className="w-18 h-1.5 bg-[#0f7cc5] mt-3 mb-7" />

          <p className="text-[18px] text-[#0f1419] leading-7 max-w-7xl">
            In addition to our internal Accessibility Experience Team, we rely on
            the support of external accessibility consulting companies to augment
            and validate our efforts, including testing with disabled people, to
            ensure we are always up to date with the latest in accessibility
            guidelines, laws, and practices.
          </p>
        </section>

        {/* Community created content */}
        <section className="mt-8">
          <h3 className="text-[23px] font-bold text-[#0f1419] mb-3">
            Community created content
          </h3>

          <p className="text-[18px] text-[#0f1419] leading-7 max-w-7xl">
            One of the best parts of X is being able to create and share content,
            especially media like images and videos. While not all content
            creators are willing or able to provide content in an inclusive way,
            we are continuously working to encourage content creators to share
            accessible content by educating and providing tools to simplify
            adding meaningful text alternatives and descriptions.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-8">
          <h2 className="text-[34px] font-bold  text-[#0f1419]">
            Contact
          </h2>
          <div className="w-18 h-1.5 bg-[#0f7cc5] mt-3 mb-7" />

          <p className="text-[18px] text-[#0f1419] leading-7 -mb-11 max-w-7xl">
            We know accessibility is an on-going process and there will always be
            work to do, but if you need support or would like to provide feedback
            you can reach us on X{" "}
            <span className="text-[#1d9bf0] underline cursor-pointer">@XA11y</span>.
            We take all your feedback and suggestions seriously, honestly, and
            with care.
          </p>
        </section>

      </main>


      {/* Footer */}
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

export default AccessibilityFooter;
