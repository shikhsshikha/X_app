import XLogo from "../../assets/X-logo-black.png";
import { Link } from "react-router-dom";
import BaseFooter from "../BaseFooter";
const CookiesFooter = () => {
  return (
    <main className="bg-white text-black">

      {/* ================= BREADCRUMB ================= */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="h-14  px-8 py-11 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center ml-2 mt-6 gap-2">
            <img src={XLogo} alt="X" className="h-7 w-7" />
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


      {/* ================= TITLE ================= */}
      {/* ===== BREADCRUMB + TITLE ===== */}
      <section className="max-w-5xl mx-auto px-6 pt-10">

        {/* Breadcrumb */}
        <p className="text-[14px] text-[#536471] mb-10">
          Help Center &nbsp;&gt;&nbsp; Platform Use Guidelines &nbsp;&gt;&nbsp;
          <span className="text-[#0f1419]">
            How cookies are used on X
          </span>
        </p>

        {/* Page Title */}
        <h1 className="text-[71px] leading-none font-bold text-[#0f1419] mb-15">
          How cookies are used on X
        </h1>

        {/* Divider */}
        <div className="w-full h-px bg-black/40 " />

      </section>


      {/* ================= CONTENT ================= */}
      <section className="max-w-4xl  px-6 ml-88 py-14 text-[18px] leading-[1.6] text-[#0f1419]">

        {/* Intro */}
        <p className="mb-3">
          Cookies and similar technologies like pixels and local storage provide
          you with a better,<br /> faster, and safer experience on X. Cookies are also
          used to operate our services, which<br /> include our websites,
          applications, APIs, pixels, embeds, and email communications.<br />
          Specifically, X uses these technologies to:
        </p>

        {/* Bullet list */}
        <ul className="list-disc pl-4 space-y-3 mb-17">
          <li>Keep you logged in to X.</li>
          <li>Deliver features and functionality of X services.</li>
          <li>Save and honor your preferences.</li>
          <li>Personalize the content you see.</li>
          <li>Protect you against spam and abuse.</li>
          <li>Show you more relevant ads.</li>
          <li>Provide subscription features and distribute certain content.</li>
          <li>Understand how you interact with our services and where we can improve.</li>
          <li>Measure the effectiveness of our advertising and marketing.</li>
          <li>Rate how our services perform and identify bugs and other quality issues. </li>
          <li>
            Gather data used to operate our business — from measuring our
            audience size to<br /> enforcing the{" "}
            <span className="text-[#1d9bf0] underline cursor-pointer">
              X Rules
            </span>.
          </li>
        </ul>

        {/* Jump links */}
        <div className="space-y-3 mb-6">
          <p className="text-[#1d9bf0] underline cursor-pointer">
            What are cookies, pixels, and local storage?
          </p>
          <p className="text-[#1d9bf0] underline cursor-pointer">
            Why do our services use these technologies?
          </p>
          <p className="text-[#1d9bf0] underline cursor-pointer">
            Where are these technologies used?
          </p>
          <p className="text-[#1d9bf0] underline cursor-pointer">
            What are my privacy options?
          </p>
          <p className="text-[#1d9bf0] underline cursor-pointer">
            More privacy options
          </p>
        </div>

        {/* ================= SECTION ================= */}
        <h2 className="text-[32px] font-bold mb-6">
          What are cookies, pixels, and local storage?
        </h2>

        <p className="mb-4">
          <strong>Cookies</strong> are small files placed on your computer as
          you browse the web or use a web-<br />enabled app. We use cookies to operate
          our services, discover how people use our<br /> services, understand how to
          make them work better and more. See above for more<br /> examples of how we use cookies. 
        </p>

        <p className="mb-4">
          <strong>Pixels</strong> are small amounts of code placed on a web page, in a web-enabled app, or an<br /> email. We use pixels, some of which we provide to advertisers to place on their web<br /> properties, to learn whether you've interacted with specific web or email content — as<br /> many services do. This helps us measure and improve our services and personalize<br /> your experience, including the ads and content you see.
        </p>

        <p className="mb-4">
          We use <strong>local storage</strong> to save data on your computer or mobile device. We use data<br /> from local storage to turn on web navigation, maintain video player preferences,<br /> customize what we show you based on your past interactions with our services,<br /> remember your preferences, and measure ad effectiveness. We may also use local<br /> storage on other websites, where necessary to provide you certain features, to obtain<br /> information about your visits to those sites.
        </p>

        {/* ================= SECTION ================= */}
        <h2 className="text-[32px] font-bold mb-6">
          Why do our services use these technologies?
        </h2>

        <p className="mb-3">
          Cookies, pixels, and local storage work to operate and support our
          business, and to<br /> help provide you with an improved experience.
          They're used across the following<br /> categories:
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-10">
          <li>Authentication and security</li>
          <li>Functionality</li>
          <li>User preferences</li>
          <li>Analytics</li>
          <li>Research and development</li>
          <li>Personalized content</li>
          <li>Advertising</li>
          <li>Marketing</li>
          <li>Personalization across devices</li>
        </ul>

        <p className="font-bold mb-4">Within each of these categories, cookies, pixels, and local storage help us:</p>

        <p className="ml-10 mb-3"><strong>Authentication and security</strong><br />
          Authenticate your X access to show you relevant content. They also help prevent<br /> unauthorized parties from accessing your account. We use these technologies to:
        </p>

        <ul className="ml-10 list-disc pl-6 space-y-3 mb-3">
          <li>Log you in to X and our services.</li>
          <li>Help protect your security and the security of our services.</li>
          <li>Let you view content with limited distribution.</li>
          <li>Help us detect and fight spam, abuse, and other activities that break the <span className="underline text-[#1d9bf0]">X Rules</span>.</li>
        </ul>

        <p className="ml-10 mb-3"><strong>Functionality</strong><br />
          Deliver error messages, allow you to switch between accounts, coordinate our<br /> service across tabs in a browser, and provide certain features on partner websites. 
        </p>

        <p className="ml-10 mb-3"><strong>User preferences</strong><br />
          Remember information about your browser and your preferences.
        </p>

        <p className="font-bold ml-10">Analytics</p>

        <ul className="ml-10 list-disc pl-6 space-y-3 mb-3">
          <li>Improve and understand how people use our services, including buttons and<br /> widgets.
          </li>
          <li>
            Optimize your experience by understanding how you interact with our services,<br /> like when and how often you use them and what links you visit, and from where.<br /> (We may use <span className="underline text-[#1d9bf0]">Google Analytics</span> to help us with this.) 
          </li>
          <li>
            Count the number of people who have seen a particular post, embedded posts,<br /> buttons, or timeline. <span className="underline text-[#1d9bf0]">Learn more</span>.
          </li>
        </ul>

        <p className="font-bold ml-10">Research and development</p>

        <ul className="ml-10 list-disc pl-6 space-y-3 mb-3">
          <li>Gather data about how you use our services, including how our services perform.<br /> This helps us detect issues, understand where we may improve, or develop new<br /> products or services.
          </li>
          <li>
            Test updates to X services, as well as build new features, functionality, and<br /> services. 
          </li>
        </ul>

        <p className="font-bold ml-10 ">Personalized content</p>

        <p className="ml-10 mb-3">
          Personalize our services in areas like trends, stories, ads, and suggestions for<br /> people to follow with more relevant content. We also use:
        </p>

        <ul className="ml-10 list-disc pl-6 space-y-3 mb-3">
          <li>Local storage to tell us which parts of your X timeline you've viewed already so<br /> that we can show you new content.
          </li>
          <li>
            Cookies to suggest who you might enjoy following based on your visits to<br /> websites with integrated X services.
          </li>
        </ul>

        <p className="font-bold ml-10 ">Advertising</p>

        <p className="ml-10 mb-3">
          Personalize ads and measure performance, like showing you ads and evaluating<br /> their effectiveness based on your visits to our ad partners' websites. This helps<br /> advertisers provide you with high-quality ads and content that may be more<br /> interesting to you. We'll also:
        </p>

        <ul className="ml-10 list-disc pl-6 space-y-3 mb-3">
          <li>Deliver ads, measure their performance, and make them more relevant to you<br /> based on criteria, like your activity on X and visits to our ad partners' websites.
          </li>
          <li>
            Work with third-party advertising partners, including Google, to market our<br /> services.
          </li>
        </ul>

        <p className="font-bold ml-10 ">Marketing</p>

        <p className="ml-10 mb-3">
          Deliver our email and web marketing campaigns and to understand our<br /> marketing effectiveness.
        </p>

        <p className="font-bold ml-10 ">Personalization across devices</p>

        <p className="ml-10 mb-3">
          Understand which devices you used so that we can personalize your experience on<br /> all of your devices.
        </p>

        <p className="ml-10 mb-3">
          Keep in mind, if you ever log in to X with your device, we associate and will<br /> continue to associate that device with your account. This means whether or not<br /> you're logged in, we'll receive information about your device(s) when information is<br /> shared by a partner, you visit twitter.com or third-party websites that integrate X<br /> services, or you visit a X advertiser's website or mobile application. Most<br /> commonly, IP addresses and the time we receive the data, are used to link that<br /> specific device with you.
        </p>

        <p className="ml-10 mb-3">
          To see more about the devices and web browsers associated with your X account,<br /> take a look at <span className="underline text-[#1d9bf0]">Your X Data</span> when you're logged in and when you're logged out of<br /> your account.
        </p>



        {/* ================= SECTION ================= */}
        <h2 className="text-[32px] font-bold mb-10">
          Where are these technologies used?
        </h2>

        <p className="mb-10">
          We (along with third parties) use these technologies on X services, which includes our<br /> websites, applications, and services and on other websites, applications, and services<br /> that have integrated X services, including third-party properties that incorporate our<br /> advertising technology. This includes our ad partners’ websites and sites that use our<br /> embeds, including embedded timelines. Third parties may also use these technologies,<br /> for example, when you click on links from X services, view or interact with third-party<br /> content in X services, or visit third-party websites that incorporate our advertising<br /> technology.
        </p>

        {/* ================= SECTION ================= */}
        <h2 className="text-[32px] font-bold mb-10">
          What are my privacy options?
        </h2>

        <p className="mb-3">
          We’re committed to giving you meaningful privacy options to control or
          limit how we,<br /> our partners, and other third-parties use cookies and
          cookie-related data.
        </p>

        <p className="mb-3">
          X <span className="underline text-[#1d9bf0]">stores information</span> about other websites where you've seen X content or accessed our<br /> services. For most X features you can adjust this by going to: Settings and privacy {">"}<br /> Privacy and safety {">"} Off-X activity {">"} Allow use of where you see X content across the<br /> web. However, for certain paid subscription features, even if you make this adjustment<br /> we will still store certain information where doing so is necessary for that feature to<br /> work. We will tell you about this storage when you sign up for these features.  
        </p>

        <p className="mb-3">
          If you’ve turned this off, or are in the EU,  Iceland, Liechtenstein, Norway or Switzerland,<br /> we won't store or use these web page visits to improve your experience in the future.<br /> However, if we've previously stored your web browsing history, we may continue to<br /> personalize your experience based on information we've already learned from that<br /> history.
        </p>

        <p className="mb-3">
          You will always see ads on X based on your X activity. There are a variety of ways you<br /> can adjust the way X uses your data for ads. You can use the following tools:
        </p>

        <ul className="list-disc space-y-3 mb-10">
          <li>
            <strong>Personalized ads setting in X</strong><br />
            Adjust your setting for use of off-X data by going to Settings and privacy {">"} Privacy and<br /> safety {">"} Ads preferences {">"} Personalized ads.
          </li>
          <li>
            <strong>Interest-based advertising for web</strong><br />
            Opt-out in your current browser through the Digital Advertising Alliance's consumer<br /> choice tool at <span>optout.aboutads.info</span>.
          </li>
          <li>
            <strong>Limit ad tracking for iOS version 13 and earlier</strong><br />
            Turn on this setting through your iOS device settings (precise instructions vary by<br /> version). 
          </li>
          <li>
            <strong>Allow apps to request to track for iOS version 14 and later </strong><br />
            Turn off the setting through your device settings (precise instructions vary by version). 
          </li>
          <li>
            <strong>Personalize based on your inferred identity setting in X </strong><br />
            Adjust the setting by going to Settings and privacy {">"} Privacy and safety {">"} Off-X activity<br /> {">"} Personalize based on your inferred identity. This controls whether we link your<br /> account to browsers or devices other than the ones you use to log into X (or if you're<br /> logged out, whether we link the browser or device you're currently using to any other<br /> browsers or devices). 
          </li>
          <li>
            <strong>Cookie settings through web browsers  </strong><br />
            Most browsers will request your permission to use cookies. Note that if you turn off<br /> cookies entirely, X services may not work correctly or you might have trouble logging<br /> into twitter.com.
          </li>
        </ul>

        {/* ================= SECTION ================= */}
        <h2 className="text-[32px] font-bold mb-10">
          More privacy options
        </h2>

        <p className="mb-6">
          Along with{" "}
          <span className="text-[#1d9bf0] underline cursor-pointer">
            optout.aboutads.info
          </span>, you can read more about opting out of interest-based<br /> ads at{" "}
          <span className="text-[#1d9bf0] underline cursor-pointer">
            networkadvertising.org/choices
          </span>. Lastly, you can opt-out of interest-based Google<br /> ads using <span className="text-[#1d9bf0] underline cursor-pointer">Google's Ads Settings</span>.
        </p>

        <p className="mb-10">
          <strong>Important:</strong> To view or change web settings for your X
          account, you'll need to log in<br /> to the web browser. Changing your X settings in the web browser when you’re logged out<br /> will only affect behavior on that browser while you aren't logged in to X. Read our article<br /> on how to access your <span className="text-[#1d9bf0] underline cursor-pointer">personalization and data settings</span> for more.
        </p>

        {/* ================= FOOT NOTE ================= */}
        <div className="w-195 h-px bg-black/40 mb-20 mt-20" />

        <p className="max-w-7xl text-[18px] leading-[1.6] text-[#0f1419]">
          The cookies you encounter depend on the features and functionality you use. The most<br /> commonly used cookies on X services are described in this <span className="text-[#1d9bf0] underline cursor-pointer">chart</span>, which we update<br /> from time to time. Cookie lifespans are capped at 13 months in certain areas. 
        </p>
      </section>


      {/* ===== COOKIES TABLE SECTION ===== */}
      <section className="max-w-7xl mx-auto px-10 py-8">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[14px] text-[#0f1419]">

            {/* Table Head */}
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left font-semibold py-4 pr-6">Name</th>
                <th className="text-left font-semibold py-4 pr-6">Description</th>
                <th className="text-left font-semibold py-4 pr-6">Controller</th>
                <th className="text-left font-semibold py-4 pr-6">
                  Learn More (Privacy Policy URL)
                </th>
                <th className="text-left font-semibold py-4">Web Domain</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {/* Row 1 */}
              <tr className="border-b  border-[#cfd9de]">
                <td className="py-10 pr-6 align-top">lscr</td>
                <td className="py-10 pr-6 align-top">
                  This cookie is for admin authentication for Scroll
                </td>
                <td className="py-10 pr-6 align-top">Twitter Inc.</td>
                <td className="py-10 pr-6 align-top">
                  <a
                    href="https://twitter.com/en/privacy"
                    className="text-[#1d9bf0] underline"
                  >
                    https://twitter.com/en/privacy
                  </a>
                </td>
                <td className="py-10 align-top">.scroll.com</td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-[#cfd9de]">
                <td className="py-10 pr-6 align-top">app_shell_referrer</td>
                <td className="py-10 pr-6 align-top">
                  This cookie is for security and functionality
                </td>
                <td className="py-10 pr-6 align-top">Twitter Inc.</td>
                <td className="py-10 pr-6 align-top">
                  <a
                    href="https://twitter.com/privacy"
                    className="text-[#1d9bf0] underline"
                  >
                    https://twitter.com/privacy
                  </a>
                </td>
                <td className="py-10 align-top">.x.com</td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b border-[#cfd9de]">
                <td className="py-10 pr-6 align-top">_utma</td>
                <td className="py-10 pr-6 align-top">
                  This cookie is for Google Analytics
                </td>
                <td className="py-10 pr-6 align-top">Google</td>
                <td className="py-10 pr-6 align-top">
                  <a
                    href="https://policies.google.com/technologies/cookies"
                    className="text-[#1d9bf0] underline"
                  >
                    https://policies.google.com/technologies/cookies
                  </a>
                </td>
                <td className="py-10 align-top">.x.com</td>
              </tr>

              {/* Row 4 */}
              <tr className="border-b border-[#cfd9de]">
                <td className="py-10 pr-6 align-top">zipbox_auth_token</td>
                <td className="py-10 pr-6 align-top">            	
                  This cookie is for legal requests
                </td>
                <td className="py-10 pr-6 align-top">Twitter Inc.</td>
                <td className="py-10 pr-6 align-top">
                  <a
                    href="https://twitter.com/privacy"
                    className="text-[#1d9bf0] underline"
                  > 	
                    https://twitter.com/privacy
                  </a>
                </td>
                <td className="py-10 align-top">.x.com</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SHARE THIS ARTICLE ===== */}
      <section className="max-w-3xl mx-auto py-13 mb-35">

        {/* Divider above */}
        <div className="w-full h-px bg-black mb-16" />

        <h2 className="text-[32px] font-bold text-[#0f1419] mb-8">
          Share this article
        </h2>

        <button className="flex items-center gap-1 px-5 py-3 rounded-full bg-[#eff8fa] text-[16px] font-bold text-[#0f1419] hover:bg-[#eff3f4]">
          <span className="text-[16px] "><img src={XLogo} alt="X" className="h-4 w-4"/></span>
          Post
        </button>

      </section>

      <BaseFooter />


    </main>
  );
};

export default CookiesFooter;
