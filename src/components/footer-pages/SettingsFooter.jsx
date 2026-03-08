import { useState } from "react";
import XLogo from "../../assets/logo-white.png";


const SettingsFooter = () => {

  const [activeMenu, setActiveMenu] = useState("personalization");
  const [personalizationEnabled, setPersonalizationEnabled] = useState(true);
  const [personalizedAds, setPersonalizedAds] = useState(true);
  const [inferredIdentity, setInferredIdentity] = useState(true);
  const [shareWithPartners, setShareWithPartners] = useState(true);

  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">

      <div className="flex w-300">

        {/* LEFT SIDEBAR */}
        <div className="w-50 border-r border-gray-800 flex flex-col items-center pt-6">
          <img src={XLogo} alt="X" className="w-8 h-8 mb-8" />
        </div>

        {/* SETTINGS MENU */}
        <div className="w-90 border-r border-gray-800">

          <div className="p-5 text-xl font-bold">
            Settings
          </div>

          <div className="px-5 text-lg font-bold mt-2">
            Privacy
          </div>

          {/* PERSONALIZATION MENU */}
          <div
            onClick={() => setActiveMenu("personalization")}
            className="px-5 py-4 bg-[#111] border-y border-gray-800 flex justify-between items-center cursor-pointer"
          >
            <div>
              <div className="font-semibold">
                Personalization and data
              </div>
              <div className="text-gray-400 text-sm">
                Allow all
              </div>
            </div>

            <span className="text-gray-400">{">"}</span>
          </div>

          {/* YOUR DATA */}
          <div
            onClick={() => setActiveMenu("data")}
            className="px-5 py-4 flex justify-between items-center cursor-pointer hover:bg-[#111]"
          >
            <div className="font-semibold">
              Your X data
            </div>

            <span className="text-gray-400">{">"}</span>
          </div>

          {/* DESCRIPTION */}
          <div className="px-5 py-6 text-gray-400 text-sm border-t border-gray-800">
            These settings apply to this browser or device while you're logged out.
            They don’t have any effect when you’re logged in.
          </div>

          {/* GENERAL */}
          <div className="px-5 text-lg font-bold border-t border-gray-800 pt-6">
            General
          </div>

          <div
            onClick={() => setActiveMenu("resources")}
            className={`px-5 py-4 flex justify-between items-center cursor-pointer
            ${activeMenu === "resources" ? "bg-[#111]" : "hover:bg-[#111]"}`}
          >
            Additional resources
            <span>›</span>
          </div>

        </div>

        {/* RIGHT SETTINGS PANEL */}
        <div className="flex-1">

          {/* PERSONALIZATION AND DATA  */}
          {activeMenu === "personalization" && (
            <div className="flex-1">

              {/* HEADER */}
              <div className="p-5 text-xl font-bold border-b border-gray-800 flex items-center gap-3">
                ← Personalization and data
              </div>

              {/* DESCRIPTION */}
              <div className="px-5 py-4 text-gray-400 text-sm border-b border-gray-800">
                These settings apply to this browser or device while you're logged out.
                They don’t have any effect when you’re logged in.
              </div>

              {/* MASTER TOGGLE */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
                <div>
                  <div className="font-semibold">
                    Personalization and data
                  </div>

                  <p className="text-gray-400 text-sm">
                    This will enable or disable all of the settings on this page.
                  </p>
                </div>

                {/* Toggle */}
                <div
                  onClick={() => setPersonalizationEnabled(!personalizationEnabled)}
                  className={`w-11 h-6 rounded-full flex items-center px-1 cursor-pointer transition
                    ${personalizationEnabled ? "bg-[#1d9bf0]" : "bg-gray-600"}`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition
                      ${personalizationEnabled ? "ml-auto" : "ml-0"}`}
                  ></div>
                </div>
              </div>

              {/* PERSONALIZATION SECTION */}
              <div className="px-5 py-5 border-b border-gray-800">

                <h2 className="text-xl font-bold mb-6">
                  Personalization
                </h2>

                {/* PERSONALIZED ADS */}
                <div className="flex justify-between gap-5 mb-6">

                  <div>
                    <div className="font-semibold mb-1">
                      Personalized ads
                    </div>

                    <p className="text-gray-400 text-sm max-w-130">
                      You will always see ads on X based on your X activity.
                      When this setting is enabled, X may further personalize
                      ads from X advertisers, on and off X, by combining your
                      X activity with other online activity and information
                      from our partners.{" "}
                      <span className="text-[#1d9bf0] cursor-pointer">
                        Learn more
                      </span>
                    </p>
                  </div>

                  <div
                    onClick={() => setPersonalizedAds(!personalizedAds)}
                    className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer
                      ${personalizedAds ? "bg-[#1d9bf0]" : "border border-gray-600"}`}
                  >
                    {personalizedAds && "✓"}
                  </div>

                </div>

                {/* INFERRED IDENTITY */}
                <div className="flex justify-between gap-5">

                  <div>
                    <div className="font-semibold mb-1">
                      Personalize based on your inferred identity
                    </div>

                    <p className="text-gray-400 text-sm max-w-130">
                      X will always personalize your experience based on
                      information you've provided, as well as the devices
                      you've used to log in. When this setting is enabled,
                      X may also personalize based on other inferences
                      about your identity.{" "}
                      <span className="text-[#1d9bf0] cursor-pointer">
                        Learn more
                      </span>
                    </p>
                  </div>

                  <div
                    onClick={() => setInferredIdentity(!inferredIdentity)}
                    className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer
                      ${inferredIdentity ? "bg-[#1d9bf0]" : "border border-gray-600"}`}
                  >
                    {inferredIdentity && "✓"}
                  </div>
                </div>

              </div>

              {/* DATA SECTION */}
              <div className="px-5 py-5">

                <h2 className="text-xl font-bold mb-6">
                  Data
                </h2>

                <div className="flex justify-between gap-5">

                  <div>
                    <div className="font-semibold mb-1">
                      Allow additional information sharing with business partners
                    </div>

                    <p className="text-gray-400 text-sm max-w-130">
                      X always shares information with business partners
                      as a way to run and improve its products. When enabled,
                      this allows X to share additional information with those
                      partners to support running X’s business.
                      <span className="text-[#1d9bf0] cursor-pointer ml-1">
                        Learn more
                      </span>
                    </p>
                  </div>

                  <div
                    onClick={() => setShareWithPartners(!shareWithPartners)}
                    className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer
                      ${shareWithPartners ? "bg-[#1d9bf0]" : "border border-gray-600"}`}
                  >
                    {shareWithPartners && "✓"}
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* YOUR X DATA PAGE */}
          {activeMenu === "data" && (
            <>
              <div className="p-5 text-xl font-bold border-b border-gray-800">
                ← Your X data
              </div>

              <div className="divide-y divide-gray-800">

                <div className="px-5 py-4 flex justify-between hover:bg-[#111] cursor-pointer">
                  <span>Account</span>
                  <span>›</span>
                </div>

                <div className="px-5 py-4 flex justify-between hover:bg-[#111] cursor-pointer">
                  <span>Apps, devices & information</span>
                  <span>›</span>
                </div>

                <div className="px-5 py-4 flex justify-between hover:bg-[#111] cursor-pointer">
                  <span>Interests and ads data</span>
                  <span>›</span>
                </div>

                <div className="px-5 py-4 flex justify-between hover:bg-[#111] cursor-pointer">
                  <span>Download archive</span>
                  <span>›</span>
                </div>

              </div>
            </>
          )}

          
          {/* ADDITIONAL RESOURCES */}
          {activeMenu === "resources" && (
            <div className="flex-1">

              {/* HEADER */}
              <div className="p-5 text-xl font-bold border-b border-gray-800">
                Additional resources
              </div>

              <div className="px-5 py-3 text-gray-400 text-sm border-b border-gray-800">
                Check out other places for helpful information to learn more about X products and services.
              </div>

              {/* RELEASE NOTES */}
              <div className="border-b border-gray-800">
                <h2 className="px-5 py-4 font-bold text-lg">Release notes</h2>

                <a
                  href="/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111] transition"
                >
                  <span>Release notes</span>

                  <img
                    src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF"
                    className="w-4 h-4 opacity-70"
                  />
                </a>
              </div>

              {/* LEGAL */}
              <div className="border-b border-gray-800">
                <h2 className="px-5 py-4 font-bold text-lg">Legal</h2>

                <a
                  href="/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111] transition"
                >
                  <span>Ads info</span>

                  <img
                    src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF"
                    className="w-4 h-4 opacity-70"
                  />
                </a>

                <a
                  href="/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Cookie Policy</span>
                  <img
                    src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF"
                    className="w-4 h-4 opacity-70"
                  />
                </a>

                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Privacy Policy</span>
                  <img
                    src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF"
                    className="w-4 h-4 opacity-70"
                  />
                </a>

                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Terms of Service</span>
                  <img
                    src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF"
                    className="w-4 h-4 opacity-70"
                  />
                </a>
              </div>

              {/* MISC */}
              <div>
                <h2 className="px-5 py-4 font-bold text-lg">Miscellaneous</h2>

                <a
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>About</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Accessibility</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/advertising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Advertising</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Blog</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/brand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Brand Resources</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Careers</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/developers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Developers</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Download the X app</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/grok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Grok</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Help Center</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>Marketing</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 hover:bg-[#111]"
                >
                  <span>News</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="/business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-5 py-4 pb-25 hover:bg-[#111]"
                >
                  <span>X for Business</span>
                  <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=FFFFFF" className="w-4 h-4 opacity-70" />
                </a>

              </div>

            </div>
          )}

        </div>

      </div>


      {/* BLUE LOGIN BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1d9bf0] text-white flex justify-between items-center px-10 py-4">

        <div>
          <div className="font-bold text-lg">
            Don’t miss what’s happening
          </div>

          <div className="text-sm">
            People on X are the first to know.
          </div>
        </div>

        <div className="flex gap-3">

          <button className="border border-white px-5 py-2 rounded-full">
            Log in
          </button>

          <button className="bg-white text-black px-5 py-2 rounded-full">
            Sign up
          </button>

        </div>

      </div>

    </div>
  );
};

export default SettingsFooter;