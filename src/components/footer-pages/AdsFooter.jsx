import XLogo from "../../assets/X-logo-black.png";

const AdsFooter = () => {
  return (
    
    <div className="bg-white text-[#0f1419]">
      

      {/* NAVBAR 1: X BUSINESS */}
      <header className="bg-white border-b border-[#e6ecf0]">
        <div className="max-w-384 mx-auto px-12 h-25 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img src={XLogo} alt="X" className="h-7 w-7" />
            <span className="text-[23px] font-bold">Business</span>
          </div>

          <nav className="flex items-center gap-8 text-[14px] text-black/80">
            <div className="flex items-center gap-1">
              <span>Basics</span>
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=1A1A1A"
                className="h-2 w-2"
                alt=""
              />
            </div>

            <div className="flex items-center gap-1">
              <span>Advertising</span>
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=1A1A1A"
                className="h-2 w-2"
                alt=""
              />
            </div>

            <div className="flex items-center gap-1">
              <span>Products</span>
              <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=1A1A1A"
                className="h-2 w-2"
                alt=""
              />
            </div>
            
            <span>Resources</span>
            <span>Help Center</span>
            <span>Premium Business</span>

            <button className="px-5 py-2.5 rounded-full border border-black/20">
              Sign in
            </button>
          </nav>

        </div>
      </header>

      {/* NAVBAR 2: ADS HELP CENTER (STICKY) */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e6ecf0]">
        <div className="max-w-384 mx-auto px-12 h-18 flex items-center justify-between">

          <span className="text-[24px] font-bold text-gray-500">
            X Ads Help Center
          </span>

          <nav className="flex items-center gap-5 text-[14px]">
            <span>Overview</span>
            <span>Account setup</span>
            <span>Campaign setup</span>
            <span>Editing & optimizing</span>
            <span>Analytics</span>
            <span>Troubleshooting</span>
            <span>X Ads policies</span>

            <button className="ml-6 px-8 py-3.5 rounded-full bg-black text-white font-medium">
              Create an ad
            </button>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative h-85 bg-[#0f1419] text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-384 mx-auto px-12 h-full flex items-center">
          <h1 className="text-[80px] ml-35 pb-12 font-extrabold">
            How X Ads work
          </h1>
        </div>
      </section>

      {/* BREADCRUMB + INTRO */}
      <section className="max-w-7xl mx-40 px-6 mt-14 mb-6">
        <p className="text-[14px] text-[#536471] mb-18">
          Help Center &gt; Troubleshooting and FAQs &gt;{" "}
          <span className="text-black">How X Ads work</span>
        </p>

        <p className="text-[18px] leading-[1.4]">
          We want to show you ads that you find interesting and useful. Here's an
          overview of how X Ads work, why you see certain ads, your privacy
          settings, and other options.
        </p>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="max-w-7xl mx-40 px-6 ">

        <h2 className="text-[34px] font-bold mb-4">
          What are X Ads?
        </h2>
        <p className="text-[18px] leading-[1.4] mb-6">
          You may see different kinds of ads on X, including{" "}
          <span className="text-[#1d9bf0] underline">Promoted Ads</span>,{" "}
          <span className="text-[#1d9bf0] underline">Follower Ads</span>, and{" "}
          <span className="text-[#1d9bf0] underline">Spotlight Takeover</span>.
          We may show these ads to<br /> you when you are logged in or logged out of X. They are clearly marked with an “Ad” label. You can interact with most promoted content in much the same way as organic content. If you follow, like, or repost content on X, including promoted content, your<br /> followers may see your name associated with that content.
        </p>

        <h2 className="text-[34px] font-bold mb-4">
          Why you see certain X Ads
        </h2>

        <p className="text-[18px] leading-[1.4] mb-6">
          Your activity on X, the information you provide to X, and our relationships with ad partners all help make promoted content more relevant for you.
        </p>

        <p className="text-[18px] leading-[1.4] mb-6">
          When you use X to follow, post, search, view, or interact with posts or X accounts, we may use these actions to customize X Ads for you. For example, if you search for a specific term, we may show you promoted content related to that topic. We also might customize ads using other information about you, such as your profile information; your mobile device location (if <span className="text-[#1d9bf0] hover:underline cursor-pointer">location features</span> are turned on); your IP address; or the apps installed on your device. This helps us show you local ads and other ads that you might prefer.
        </p>

        <p className="text-[18px] leading-[1.4] mb-6">
          X may also personalize ads based on information that X and our affiliates collect and that our ad partners share with us, such as a hashed email address, a mobile device identifier, or browser-related information (a browser cookie ID).
        </p>

        <p className="text-[18px] leading-[1.4] mb-6">
          This helps X display ads about things you’ve already shown interest in from brands and businesses that you may like. For example, you could receive a Promoted Ad about a deal or promotion from a business whose website you frequent, or email newsletter you subscribe to. You could also see this business as a Follower Ad in one of your "Who to Follow" suggestions. Learn more about<br /> your <span className="text-[#1d9bf0] hover:underline cursor-pointer">privacy controls for personalized ads</span>.
        </p>

      </section>

      {/* PRIVACY SETTINGS */}
      <section className="max-w-7xl mx-40 px-6 pb-24">

        <h2 className="text-[34px] font-bold mb-4">
          Managing your privacy settings
        </h2>

        <p className="text-[18px] leading-[1.4] mb-6">
          We're committed to offering you meaningful privacy choices.
        </p>

        <ul className=" pl-6 leading-[1.4] text-[18px]">
          <li className="list-disc mb-5">
           If you don't want X to show you interest-based ads on and off of X, there are several ways to turn off this feature:
          </li>
          <li className="list-[circle] ml-6 mb-1">
            Using your X settings, visit the "Personalization and data settings" and adjust the "Personalize ads" setting.
          </li>
          <li className="list-[circle] ml-6 mb-1">
            If you're on web, you can visit the Digital Advertising Alliance’s consumer choice tool at <span className="text-[#1d9bf0] hover:underline cursor-pointer">optout.aboutads.info</span> to opt-out of seeing interest-based advertising from X in your current browser.
          </li>
          <li className="list-[circle] ml-6 mb-1">
            On iOS 13 and earlier only, if you don't want X to show you interest-based ads in X for iOS on your current mobile device, enable the “Limit Ad Tracking” setting in your iOS settings (precise directions may be different on different iOS versions). 
          </li>
          <li className="list-[circle] ml-6 mb-6">
            On Android, if you don't want X to show you interest-based ads in X for Android on your current mobile device, enable “Opt out of Ads Personalization” in your Android phone’s settings (precise directions and name of the setting may be different on different Android versions and OEM Android variants).
          </li>
        </ul>

        <p className="text-[18px] leading-[1.4] mb-6 italic">
          Note: Please confirm that you're logged in if you want to view or change the web settings for your X account. Changing your X settings in your web browser when you are logged out will only affect behavior on that browser while you're not logged in to X. Learn more about how to access your <span className="text-[#1d9bf0] hover:underline cursor-pointer">personalization and data settings</span>, including in your X mobile app.
        </p>
        
        <ul className=" pl-6 list-disc space-y-2 leading-[1.4] text-[18px] mb-6">
          <li>
            X also works with third-party advertising partners, including Google, to market X’s own services and serve ads on behalf of X advertisers, including through the delivery of interest-based ads. The privacy options described here apply to interest-based ads served by or on X; they do not apply to ads served by these other companies off of X, including on X's behalf. You can learn<br /> more about opting out of receiving interest-based ads from other companies at <span className="text-[#1d9bf0] hover:underline cursor-pointer">optout.aboutads.info</span> and <span className="text-[#1d9bf0] hover:underline cursor-pointer">www.networkadvertising.org/choices</span>. If you're on the web, you can also opt-out of Google Analytics by installing Google’s <span className="text-[#1d9bf0] hover:underline cursor-pointer">opt-<br/>out browser add-on</span>, and opt-out of interest-based Google ads using <span className="text-[#1d9bf0] hover:underline cursor-pointer">Google Ads settings</span>.
          </li>
          <li>
            On iOS version 14 and later only, if you do not want X to access your iOS Identifier for Advertising, disable the “Allow Apps to Request to Track” setting in your iOS settings (precise directions may be different on different iOS versions).
          </li>
          <li>
            In addition, whether you're logged in or logged out, you always have the option to "dismiss" Promoted Ads and/or accounts that you're not interested in seeing. This feedback helps us show you better promoted content.
          </li>
        </ul>

        <h2 className="text-[34px] font-bold mb-4">
          How can I run X Ads?
        </h2>
        <p className="text-[18px] leading-[1.4] mb-6">
          Eligible accounts can launch campaigns at <span className="text-[#1d9bf0] hover:underline cursor-pointer">ads.X.com</span>. For more information, visit <span className="text-[#1d9bf0] hover:underline cursor-pointer">getting started with X Ads campaigns</span>
        </p>

      </section>

      {/* HELPFUL SECTION */}
      <section className="bg-[#f7f9f9] py-8 text-center">
        <div>
          <h2 className="text-[28px] font-bold mb-6">
            Was this article helpful?
          </h2>

          <div className="flex justify-center gap-10 text-[18px]">
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <span className="text-[40px]">😊</span>
              Yes
            </div>

            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <span className="text-[40px]">😞</span>
              No
            </div>
          </div>
        </div>
        
      </section>

      <div className="h-25 bg-white">

      </div>

      {/* CTA */}
      <section className="relative h-85 bg-black text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-384 mx-40 px-12 h-full flex flex-col justify-center">
          <h2 className="text-[48px] font-extrabold mb-8">
            Ready to get started?
          </h2>

          <button className="w-fit px-8 py-4 bg-white text-black rounded-full font-semibold">
            Create your ad
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f2933] text-white py-10">
        <div className="max-w-384 mx-40 px-12 flex gap-120 text-[14px] text-white/70">
          <span>© 2026 X Corp.</span>
          <div className="flex items-center gap-1">
            <span>English</span>
            <img
                src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                className="h-4 w-4"
                alt=""
              />
          </div>
          
        </div>
      </footer>

    </div>
  );
};

export default AdsFooter;
