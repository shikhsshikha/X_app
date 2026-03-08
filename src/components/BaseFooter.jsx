import { useState } from "react";

const arrow =
  "https://img.icons8.com/?size=100&id=HqE81NCGcYux&format=png&color=FFFFFF";

const BaseFooter = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <section>

      {/* ================= DESKTOP FOOTER ================= */}
      <footer className="hidden md:block bg-[#0f1419] px-20 py-21">
        <div className="grid grid-cols-5 text-[#A1A1A1] gap-12 text-sm">

          {/* X platform */}
          <div>
            <h4 className="mb-5 font-extrabold">X platform</h4>
            <ul className="space-y-2">
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

          {/* X Corp */}
          <div>
            <h4 className="mb-5 font-extrabold">X Corp.</h4>
            <ul className="space-y-2">
              <li>About the company</li>
              <li>Company news</li>
              <li>Brand toolkit</li>
              <li>Jobs and internships</li>
              <li>Investors</li>
            </ul>
          </div>

          {/* Help */}
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

          {/* Developer resources */}
          <div>
            <h4 className="mb-5 font-extrabold">Developer resources</h4>
            <ul className="space-y-2">
              <li>Developer home</li>
              <li>Documentation</li>
              <li>Forums</li>
              <li>Communities</li>
              <li>Developer blog</li>
              <li>Engineering blog</li>
              <li>Developer terms</li>
            </ul>
          </div>

          {/* Business resources */}
          <div>
            <h4 className="mb-5 font-extrabold">Business resources</h4>
            <ul className="space-y-2">
              <li>Advertise</li>
              <li>X for business</li>
              <li>Resources and guides</li>
              <li>X for marketers</li>
              <li>Marketing insights</li>
              <li>Brand inspiration</li>
              <li>X Ads Academy</li>
            </ul>
          </div>

          {/* bottom row */}
          <div className="col-span-5 grid grid-cols-5 pt-12 text-sm font-bold text-[#A1A1A1]">
            <span>© 2026 X Corp.</span>
            <span>Cookies</span>
            <span>Privacy</span>
            <span>Terms and conditions</span>

            <span className="flex items-center gap-1">
              English
              <img src={arrow} className="w-3" alt="arrow" />
            </span>
          </div>
        </div>
      </footer>

      {/* ================= MOBILE FOOTER ================= */}
      <footer className="md:hidden bg-[#0f1419] text-[#A1A1A1] px-6 py-8">

        {/* X platform */}
        <button
          onClick={() => toggle("platform")}
          className="w-full flex justify-between items-center py-4 font-semibold"
        >
          X platform
          <img
            src={arrow}
            alt="arrow"
            className={`w-4 transition-transform ${
              open === "platform" ? "rotate-180" : ""
            }`}
          />
        </button>

        {open === "platform" && (
          <ul className="space-y-3 pb-4 text-sm">
            <li>X.com</li>
            <li>Status</li>
            <li>Accessibility</li>
            <li>Embed a post</li>
            <li>Privacy Center</li>
            <li>Transparency Center</li>
            <li>Download the X app</li>
            <li>Try Grok.com</li>
          </ul>
        )}

        {/* X Corp */}
        <button
          onClick={() => toggle("corp")}
          className="w-full flex justify-between items-center py-4 font-semibold"
        >
          X Corp.
          <img
            src={arrow}
            alt="arrow"
            className={`w-4 transition-transform ${
              open === "corp" ? "rotate-180" : ""
            }`}
          />
        </button>

        {open === "corp" && (
          <ul className="space-y-3 pb-4 text-sm">
            <li>About the company</li>
            <li>Company news</li>
            <li>Brand toolkit</li>
            <li>Jobs and internships</li>
            <li>Investors</li>
          </ul>
        )}

        {/* Help */}
        <button
          onClick={() => toggle("help")}
          className="w-full flex justify-between items-center py-4 font-semibold"
        >
          Help
          <img
            src={arrow}
            alt="arrow"
            className={`w-4 transition-transform ${
              open === "help" ? "rotate-180" : ""
            }`}
          />
        </button>

        {open === "help" && (
          <ul className="space-y-3 pb-4 text-sm">
            <li>Help Center</li>
            <li>Using X</li>
            <li>X for creators</li>
            <li>Ads Help Center</li>
            <li>Managing your account</li>
            <li>Email Preference Center</li>
            <li>Rules and policies</li>
            <li>Contact us</li>
          </ul>
        )}

        {/* Developer resources */}
        <button
          onClick={() => toggle("dev")}
          className="w-full flex justify-between items-center py-4 font-semibold"
        >
          Developer resources
          <img
            src={arrow}
            alt="arrow"
            className={`w-4 transition-transform ${
              open === "dev" ? "rotate-180" : ""
            }`}
          />
        </button>

        {open === "dev" && (
          <ul className="space-y-3 pb-4 text-sm">
            <li>Developer home</li>
            <li>Documentation</li>
            <li>Forums</li>
            <li>Communities</li>
            <li>Developer blog</li>
            <li>Engineering blog</li>
            <li>Developer terms</li>
          </ul>
        )}

        {/* Business resources */}
        <button
          onClick={() => toggle("business")}
          className="w-full flex justify-between items-center py-4 font-semibold"
        >
          Business resources
          <img
            src={arrow}
            alt="arrow"
            className={`w-4 transition-transform ${
              open === "business" ? "rotate-180" : ""
            }`}
          />
        </button>

        {open === "business" && (
          <ul className="space-y-3 pb-4 text-sm">
            <li>Advertise</li>
            <li>X for business</li>
            <li>Resources and guides</li>
            <li>X for marketers</li>
            <li>Marketing insights</li>
            <li>Brand inspiration</li>
            <li>X Ads Academy</li>
          </ul>
        )}

        {/* bottom links */}
        <div className="pt-6 text-sm space-y-2">
          <p>© 2026 X Corp.</p>
          <p>Cookies</p>
          <p>Privacy</p>
          <p>Terms and conditions</p>

          <p className="flex items-center gap-1">
            English
            <img src={arrow} className="w-3" alt="arrow" />
          </p>
        </div>

      </footer>

    </section>
  );
};

export default BaseFooter;