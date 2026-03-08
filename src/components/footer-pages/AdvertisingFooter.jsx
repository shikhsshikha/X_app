import promotedAdImg from "../../assets/ads-promoted.png";
import verticalAdImg from "../../assets/ads-vertical.png";
import collectionAdImg from "../../assets/ads-collection.png";
import XLogo from "../../assets/logo-white.png";
import audienceCard1 from "../../assets/audienceCard1.png"
import audienceCard2 from "../../assets/audienceCard2.png"
import audienceCard3 from "../../assets/audienceCard3.png"
import cardImg3 from "../../assets/cardImg3.jpg"
import BaseFooter from "../BaseFooter";


const AdvertisingSection = () => {
  return (
    
    <section className="w-full bg-black text-white">
      <section className="w-full bg-black border-b-2 border-white/10">
        <div className="max-w-full mx-5 h-18 flex items-center justify-between text-white">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img src={XLogo} alt="" className="h-6 w-6" />
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
                <span className="absolute -bottom-6 left-0 w-24 h-1 bg-sky-500 rounded-full" />
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

            <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=FFFFFF" alt="" className="h-8 w-8 bg-white/10 rounded-full p-2 hover:bg-slate-700" />

            <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-bold">
              Get Started
            </button>
          </div>

        </div>
      </section>

      <section className="w-full bg-black text-white">
        <div className="max-w-full mx-50 px-10 py-32">
          <div className="flex items-center gap-20">
            
            {/* X Logo */}
            <img src={XLogo} alt="" className="h-65 w-65" />

            {/* Text Content */}
            <div className="max-w-full">
              <h1 className="text-[65px] leading-[1.1] tracking-tight font-bold mb-8">
                Connect with your<br />
                next customers on X.
              </h1>

              {/* Buttons */}
              <div className="flex items-center gap-5">
                <button className="px-5 py-2 rounded-full bg-linear-to-r from-[#6F7780] via-[#9AA1A7] to-[rgb(230,234,237)] text-black font-bold shadow-inner hover:border border-white transition cursor-pointer">
                  Get Started
                </button>

                <button className="px-4 py-2 rounded-full border border-white/30 text-white font-medium  hover:bg-slate-700 hover:transition">
                  Talk To An Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-[#1f272e] py-12 pb-18 px-10">
        <div className="max-w-full mx-40">
          {/* Heading */}
          <h2 className="text-[41px] leading-tight tracking-wide font-bold text-white max-w-full mb-10">
            Our audience is influential, plugged-in and in a dis-<br />
            covery mindset
          </h2>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {/* Card 1 */}
            <img src={audienceCard1} alt="" className="h-85 w-85" />

            {/* Card 2 */}
            <img src={audienceCard2} alt="" className="h-85 w-85" />

            {/* Card 3 */}
            <img src={audienceCard3} alt="" className="h-85 w-85" />
          </div>
        </div>
      </section>


      <section className="bg-black text-white">

        {/* INTRO */}
        <div className="max-w-7xl mx-42 pt-20 px-10 pb-24">
          <h2 className="text-[44px] font-semibold max-w-full leading-[1.1] mb-10">
            Use scroll-stopping formats to stand out on the<br /> timeline
          </h2>

          <p className="text-white/90 max-w-full">
            Whether you want to use video, images, or words - or some combination of the three -
            there’s an X ad format that fits your business goals.
          </p>
        </div>

        {/* PROMOTED ADS */}
        <div className="max-w-full mx-52  py-4 flex align items-center">
          {/* LEFT */}
          <div>
            <h3 className="text-[31px] font-bold tracking-wide mb-3">
              Promoted ads
            </h3>

            <p className="text-white leading-relaxed mb-3 max-w-full">
              Promoted Ads are regular Posts that advertisers pay to amplify, reaching a broader<br />
              audience or boosting engagement with their followers. Labeled as “Promoted,”<br /> they
              function like any other Post — open to Reposts, replies, likes, and more. They<br /> can be text-only, or feature images or videos. For examples and specs, click here.
            </p>

            <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold">
              Learn more
            </button>
          </div>

          {/* RIGHT */}
          <div className="ml-12">
            <img
              src={promotedAdImg}
              alt="Promoted Ads"
              className="max-h-120"
            />
          </div>
        </div>

        {/* VERTICAL VIDEO ADS */}
        <div className="max-w-full mx-52 py-4 pt-20 flex align items-center">
          {/* LEFT */}
          <div>
            <img
              src={verticalAdImg}
              alt="Vertical Video Ads"
              className="max-h-130"
            />
          </div>

          {/* RIGHT */}
          <div className="ml-40">
            <h3 className="text-[31px] font-bold tracking-wide mb-3">
              Vertical Video Ads
            </h3>

            <p className="text-white leading-relaxed mb-3 max-w-2xl">
              Vertical Video Ads, the fastest-growing format on X, account for ~20% of daily user time. These full-screen, sound-on ads let your brand captivate audiences, expand reach, and drive traffic to your website or app. As our most engaging ad format,<br /> they put your message front and center. A call-to-action button appears after just<br /> one second, boosting clicks to your site or app. Data shows users are 7x more<br /> likely to engage—following, reposting, liking, or clicking URLs—compared to<br /> identical ads on the Home Timeline. 
            </p>

            <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold">
              Learn more
            </button>
          </div>
        </div>

        {/* COLLECTION ADS */}
        <div className="max-w-full mx-52 pt-20 pb-10 py-4 flex align items-center">
          {/* LEFT */}
          <div>
            <h3 className="text-[31px] font-bold tracking-wide mb-3">
              Collection Ads
            </h3>

            <p className="text-white leading-relaxed mb-3 max-w-full">
              Collection Ads on X offer a fresh way to browse, tell stories, and shop. Featuring a<br /> primary hero image with smaller thumbnails below, they showcase product<br /> collections in one seamless view—no swiping needed, unlike Carousel Ads.<br /> Advertisers gain flexibility with customizable links to unique product pages and up<br /> to 6 highlighted products, services, or promotions in a single ad.
            </p>

            <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold">
              Learn more
            </button>
          </div>

          {/* RIGHT */}
          <div className="ml-12">
            <img
              src={collectionAdImg}
              alt="Collection Ads"
              className="max-h-120"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-16 pb-40">
          <button className="px-5 py-2.5 rounded-full bg-linear-to-r from-[#cfd3d6] to-[#9aa0a6] text-black text-[15px] font-bold">
            See all ad formats
          </button>
        </div>

      </section>


      <section className="bg-[#1f272e] py-10">
        <div className="max-w-6xl mx-auto px-10">

          {/* HEADER */}
          <div className="text-center tracking-wide mb-20">
            <h2 className="text-[42px] font-bold mb-10">
              Get inspired
            </h2>
            <p className="text-white tracking-tight text-md">
              Explore how brands spark connections and see results on X.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-3 -mt-6 gap-10">
            
            {/* CARD 1 */}
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
                bg-[#1F2A32]
                transition-all
                duration-300
                hover:shadow-[0_0_60px_rgba(255,255,255,0.18)]
              "
            >
              {/* TOP IMAGE SECTION */}
              <div className="relative h-56 bg-black flex items-center justify-center">
                
                {/* subtle texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] opacity-40" />

                <img
                  src={XLogo}
                  alt="X Logo"
                  className="relative w-32 h-32 object-contain"
                />
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 min-h-80 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Al Rajhi Bank
                  </h3>

                  <p className="text-white text-md leading-relaxed">
                    For the first time, a bank in Saudi Arabia leveraged Scheduled
                    Notification tactic in a promotional setting, combining it with a
                    high-impact X Takeover to ensure customers stayed informed and
                    engaged throughout the week, transforming passive scrolling into
                    active participation.
                  </p>
                </div>

                {/* ARROW */}
                <div className="mt-6 flex justify-end">
                  <span className="
                    w-10 h-10
                    rounded-full
                    bg-white/10
                    flex items-center justify-center
                    text-lg
                    transition
                    group-hover:bg-white/20
                  ">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
                bg-[#1F2A32]
                transition-all
                duration-300
                hover:shadow-[0_0_60px_rgba(255,255,255,0.18)]
              "
            >
              {/* TOP IMAGE SECTION */}
              <div className="relative h-56 bg-black flex items-center justify-center">
                {/* subtle texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] opacity-40" />

                <img
                  src={XLogo}
                  alt="X Logo"
                  className="relative w-32 h-32 object-contain"
                />
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 min-h-80 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Salam
                  </h3>

                  <p className="text-white text-md leading-relaxed">
                    WakeOne foucsed on activating X's real time features to build anticipation, trigger fan participation, and amplify key release moments organically for Zerobaseone's album launch.
                  </p>
                </div>

                {/* ARROW */}
                <div className="mt-26 flex justify-end">
                  <span className="
                    w-10 h-10
                    rounded-full
                    bg-white/10
                    flex items-center justify-center
                    text-lg
                    transition
                    group-hover:bg-white/20
                  ">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
                bg-[#1F2A32]
                transition-all
                duration-300
                hover:shadow-[0_0_60px_rgba(255,255,255,0.18)]
              "
            >
              {/* TOP IMAGE SECTION */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cardImg3}
                  alt="1X NEO"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 min-h-65 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    1X NEO
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">
                    How 1X drove virality for NEO launch with Takeovers.
                  </p>
                </div>

                {/* ARROW */}
                <div className="mt-48 flex justify-end">
                  <span
                    className="
                      w-10 h-10
                      rounded-full
                      bg-white/10
                      flex items-center justify-center
                      text-lg
                      transition
                      hover:bg-white/20
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button className="px-5 py-3 rounded-full bg-linear-to-r from-[#D1D5DB] to-[#9CA3AF] text-black text-md font-bold hover:opacity-90 transition cursor-pointer">
              Discover more
            </button>
          </div>

        </div>
      </section>


      <section className="relative w-full bg-black py-18 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center relative">

          {/* Heading */}
          <h2 className="text-[42px] font-bold tracking-wide text-white mb-9">
            Ready to get started?
          </h2>

          {/* Subtext */}
          <p className="text-white text-base mb-12">
            Stay ahead of the curve. Advertise on X and turn conversations into opportunities.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              className="
                px-6 py-3 mb-12
                rounded-full
                bg-linear-to-r from-[#D7DBDF] to-[#9AA0A6]
                text-black
                text-sm
                font-bold
                hover:opacity-90
                transition
              "
            >
              Get Started
            </button>
          </div>

          <div className="absolute left-6 bottom-0 text-sm text-white cursor-pointer">
            Source
          </div>

          <div className="absolute right-6 bottom-0 flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
              className="h-4 w-4 opacity-80"
              alt="dropdown"
            />
          </div>

        </div>
      </section>

      <BaseFooter />
    </section>
  );
};

export default AdvertisingSection;