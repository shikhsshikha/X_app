import XLogo from "../../assets/logo-white.png";
import MarqueeCards from "../MarqueeCards";

const MARQUEE_DATA = [
  { id: 10, text: "Finally got unlimited API calls without tier anxiety" },
  { id: 11, text: "X API webhooks are firing perfectly on prod" },
  { id: 13, text: "Usage analytics show 300% more engagement" },
  { id: 14, text: "Rate limiting was the bottleneck, not compute" },
  { id: 15, text: "X API documentation is actually helpful" },
  { id: 18, text: "X API v2 endpoints are so much cleaner" },
  { id: 19, text: "Built trend analysis in under an hour" },
  { id: 20, text: "API keys are fast, secure, and simple" },
];

const DevelopersFooter = () => {
  return (
      
      <section className="w-full bg-black text-white">
        <section
          className="sticky top-0 z-50 w-full bg-black"
        >
          <div
            className="max-w-full mx-35 h-18 flex items-center justify-between text-white
            "
          >
            {/* ================= LEFT ================= */}
            <div className="flex items-center gap-12">
              {/* X LOGO */}
              <img
                src={XLogo}
                alt="X"
                className="h-6 w-6"
              />

              {/* NAV LINKS */}
              <nav className="flex items-center gap-10 text-[14px] font-medium tracking-normal text-white/60">
                <span className="hover:text-white transition cursor-pointer">
                  DOCS
                </span>
                <span className="hover:text-white transition cursor-pointer">
                  FEATURES
                </span>
                <span className="hover:text-white transition cursor-pointer">
                  PRICING
                </span>
                <span className="hover:text-white transition cursor-pointer">
                  COMPARISON
                </span>
              </nav>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex items-center gap-4 ">

              {/* LANGUAGE */}
              <button
                className="
                  flex items-center gap-2
                  px-5 py-2
                  rounded-full
                  border border-white/20
                  text-[13px]
                  font-medium
                  tracking-wide
                  hover:bg-white/10 cursor-pointer
                  transition
                "
              >
                <img
                  src="https://img.icons8.com/?size=100&id=3685&format=png&color=FFFFFF"
                  alt="Language"
                  className="h-4 w-4"
                />
                <span>ENGLISH</span>
                <img
                  src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                  className="h-3 w-3"
                  alt=""
                />
              </button>

              {/* SIGN IN */}
              <button
                className="
                  px-5 py-2
                  rounded-full
                  border border-white/30
                  text-[13px]
                  font-semibold
                  tracking-wide
                  hover:bg-white/10 cursor-pointer
                  transition
                "
              >
                SIGN IN
              </button>

            </div>
          </div>
        </section>


        <section
          className="w-full py-20 pb-30 flex items-center justify-center text-white relative overflow-hidden bg-[linear-gradient(135deg,#000000_0%,#000000_10%,#2a2a2a_55%,#111111_65%,#000000_80%,#000000_100%)]
          "
        >
          {/* subtle noise / softness layer */}
          <div className="absolute inset-0 bg-black/40 " />

          {/* CONTENT */}
          <div className="relative z-10 text-center max-w-4xl px-6">

            {/* INTRO TAG */}
            <div className="text-xs tracking-wider opacity-80 text-white/50 mb-8">
              [ INTRODUCING ]
            </div>

            {/* HEADING */}
            <h1 className="text-[65px] leading-tight font-semibold mb-8">
              A New Developer
              <br />
              Experience
            </h1>

            {/* SUBTEXT */}
            <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              An all-new Developer Console with consumption-based billing. No fixed
              monthly costs, no monthly caps.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex items-center justify-center gap-6">
              <button
                className="
                  px-7 py-3
                  rounded-full
                  bg-white
                  text-black
                  text-sm
                  font-semibold
                  hover:opacity-90 cursor-pointer
                  transition
                  flex
                  items-center
                  gap-2
                "
              >
                Go to Console
                <span className="text-lg">→</span>
              </button>

              <button
                className="
                  px-7 py-4
                  rounded-full
                  border
                  border-white/30
                  text-white
                  text-sm
                  font-medium
                  hover:bg-white/10 cursor-pointer
                  transition
                "
              >
                Learn More
              </button>
            </div>

          </div>
        </section>

        
        <section className="w-full bg-black text-white border-b border-white/10 mb-10 py-22">
          <div className="max-w-full  px-38 ">

            {/* TOP ROW */}
            <div className="flex items-center justify-between mb-18 ">
              {/* LEFT */}
              <div>
                <div className="text-xs tracking-wider text-white/50 mb-6">
                  [ KEY FEATURES ]
                </div>

                <h2 className="text-[46px] font-md tracking-tighter">
                  Benefits of Pay-Per-Use
                </h2>
              </div>

              {/* RIGHT */}
              <p className="max-w-md pt-15 text-white/70 text-md leading-relaxed">
                Our new credit-based pricing model offers increased
                flexibility and accessibility for developers.
              </p>
            </div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-4">

              {/* ================= COL 1 ================= */}
              <div className="pr-10 border-l border-white/10 pl-10 ">
                {/* ICON */}
                <svg
                  className="w-7 h-7 mb-8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>

                <h3 className="text-xl font-semibold mb-4">
                  Flexibility
                </h3>

                <p className="text-white/70 leading-relaxed">
                  No fixed monthly costs — pay only for what you use. Scale
                  up or down as needed without commitment.
                </p>
              </div>

              {/* DIVIDER */}
              <div className="border-l border-white/10 pl-10 pr-10">
                {/* ICON */}
                <svg
                  className="w-7 h-7 mb-8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 12h11l-4-4m4 4-4 4" />
                </svg>

                <h3 className="text-xl font-semibold mb-4">
                  Accessibility
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Lower barriers for small developers. Costs scale with
                  usage, avoiding tier jumps.
                </p>
              </div>

              {/* ================= COL 3 ================= */}
              <div className="border-l border-white/10 pl-10 pr-10">
                {/* ICON */}
                <svg
                  className="w-7 h-7 mb-8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <rect x="4" y="10" width="16" height="10" rx="2" />
                  <path d="M8 10V6a4 4 0 0 1 8 0v4" />
                </svg>

                <h3 className="text-xl font-semibold mb-4">
                  Expanded Access
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Democratized access to the API: fewer tier restrictions
                  with less restrictive rate limits per endpoint.
                </p>
              </div>

              {/* ================= COL 4 ================= */}
              <div className="border-l border-white/10 pl-10">
                {/* ICON */}
                <svg
                  className="w-7 h-7 mb-8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 19V5" />
                  <path d="M10 19V9" />
                  <path d="M16 19V3" />
                </svg>

                <h3 className="text-xl font-semibold mb-4">
                  New Developer Console
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Purchase credits, get quick-started with apps, and
                  monitor consumption in real-time — all from the new
                  Developer Console.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full bg-black text-white  py-12 overflow-hidden">
          <div className="max-w-full mx-40 px-10 ">

            {/* HEADER */}
            <div className="text-center mb-24">
              <div className="text-xs tracking-wider text-white/50 mb-6">
                [ LIVE DATA ]
              </div>

              <h2 className="text-[52px] font-semibold tracking-tight mb-6">
                Real responses. Lightning quick.
              </h2>

              <p className="text-white/60 text-lg">
                Tap into what's happening directly from the API. Delivered with velocity.
              </p>
            </div>
          </div>

          {/* MARQUEE */}
          {/* ================= MARQUEE ================= */}
        <div className="relative space-y-14">

          {/* Row 1 — LEFT → RIGHT */}
          <div className="relative pl-10 overflow-hidden">
            <div className="flex gap-6 w-max animate-marquee-left">
              {[...MARQUEE_DATA, ...MARQUEE_DATA].map((item, i) => (
                <MarqueeCards key={`r1-${i}`} {...item} />
              ))}
            </div>
          </div>

          {/* Row 2 — RIGHT → LEFT */}
          <div className="relative pl-10 overflow-hidden">
            <div className="flex gap-6 w-max animate-marquee-right">
              {[...MARQUEE_DATA, ...MARQUEE_DATA].map((item, i) => (
                <MarqueeCards key={`r2-${i}`} {...item} />
              ))}
            </div>
          </div>

          {/* Row 3 — LEFT → RIGHT */}
          <div className="relative pl-10 overflow-hidden">
            <div className="flex gap-6 w-max animate-marquee-left">
              {[...MARQUEE_DATA, ...MARQUEE_DATA].map((item, i) => (
                <MarqueeCards key={`r3-${i}`} {...item} />
              ))}
            </div>
          </div>
        </div>
        </section>


        <section className="w-full bg-black text-white py-25 border-t border-b border-white/10 mb-20">
          <div className="max-w-6xl mx-auto px-6">

            {/* HEADER */}
            <div className="text-center mb-20">
              <div className="text-xs tracking-widest text-white/50 mb-6">
                [ TRANSPARENT PRICING ]
              </div>

              <h2 className="text-[46px] font-md tracking-tight mb-4">
                Credit consumption details
              </h2>

              <p className="text-slate-300 opacity-80 text-md">
                Transparent pricing below. Pay only for what you use.
              </p>
            </div>

            {/* TABLE */}
            <div className="rounded-xl max-w-225 mx-auto -mt-8 overflow-hidden border border-white/10 bg-[#0b0b0b]">

              {/* TABLE HEADER */}
              <div className="grid grid-cols-3 px-6 py-4 text-sm font-medium text-white bg-[#111] border-b border-white/10">
                <div className="pr-6 border-r border-white/10">Resource</div>
                <div className="px-6 border-r border-white/10">Unit Cost</div>
                <div className="pl-6 flex items-center gap-2">
                  Estimated Cost <span className="text-white/50">(per month)</span>
                </div>
              </div>

              {/* ROW */}
              {[
                {
                  title: "Posts: Read",
                  desc: "Charged per resource fetched.",
                  cost: "$0.005",
                  unit: "per resource",
                  usage: "10k resources",
                  price: "$50.00",
                },
                {
                  title: "User: Read",
                  desc: "Charged per resource fetched.",
                  cost: "$0.010",
                  unit: "per resource",
                  usage: "5k resources",
                  price: "$50.00",
                },
                {
                  title: "DM Event: Read",
                  desc: "Charged per resource fetched.",
                  cost: "$0.010",
                  unit: "per resource",
                  usage: "2k resources",
                  price: "$20.00",
                },
                {
                  title: "Content: Create",
                  desc: "Creating posts or media. Charged per request.",
                  cost: "$0.010",
                  unit: "per request",
                  usage: "5k requests",
                  price: "$50.00",
                },
                {
                  title: "DM Interaction: Create",
                  desc: "Creating DM interactions. Charged per request.",
                  cost: "$0.015",
                  unit: "per request",
                  usage: "1k requests",
                  price: "$15.00",
                },
                {
                  title: "User Interaction: Create",
                  desc: "Creating user interactions. Charged per request.",
                  cost: "$0.015",
                  unit: "per request",
                  usage: "2k requests",
                  price: "$30.00",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-6 py-5 border-b border-white/10 last:border-b-0"
                >
                  {/* RESOURCE */}
                  <div className="pr-6 border-r border-white/10">
                    <div className="font-medium text-sm mb-0.5">{row.title}</div>
                    <div className="text-white/50 text-xs">{row.desc}</div>
                  </div>

                  {/* UNIT COST */}
                  <div className="px-6 border-r border-white/10">
                    <div className="font-medium">{row.cost}</div>
                    <div className="text-white/50 text-xs">{row.unit}</div>
                  </div>

                  {/* ESTIMATED COST */}
                  <div className="pl-6">
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-white/60">Usage</span>
                      <span>{row.usage}</span>
                    </div>

                    <div className="relative mb-1">
                      <div className="h-0.75 bg-white/10 rounded-full" />
                      <div className="absolute top-1/2 -translate-y-1/2 left-12 w-3 h-3 rounded-full bg-white" />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/40 text-xs">0k</span>
                      <span className="text-emerald-400 font-medium">{row.price}</span>
                      <span className="text-white/40">50k</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTNOTE */}
            <div className="text-center text-white/40 text-xs tracking-wide mt-6">
              50k upper bound shown for visualization purposes only.
            </div>

            {/* SEE MORE */}
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition flex items-center gap-2">

                See more resources 
                <img
                  src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                  className="h-4 w-4"
                  alt=""
                />
              </button>
            </div>

            {/* TOTAL */}
            <div className="mt-10">
              <div className="max-w-4xl mx-auto rounded-xl bg-linear-to-r from-[#052a1c] to-[#031b12] border border-emerald-500/20 py-4 text-center">
                <div className="text-white/60 text-[15px] mb-1">
                  Estimated Monthly Total
                </div>
                <div className="text-[41px] font-semibold">
                  $215
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="w-full bg-black text-white pb-25 mb-10 py-8 border-b border-white/10">
          <div className="max-w-full mx-auto px-6 text-center">

            {/* EYEBROW */}
            <div className="text-xs tracking-[0.1rem] text-white/50 mb-4">
              [ THE DIFFERENCE ]
            </div>

            {/* TITLE */}
            <h2 className="text-[48px] font-md tracking-tighter mb-4">
              Pay-Per-Use vs. Subscription
            </h2>

            {/* SUBTITLE */}
            <p className="text-lg text-white/60 max-w-full mx-auto mb-8">
              See how our new pay-per-use model compares to the old subscription-based pricing.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-195 mx-auto text-left">

              {/* OLD MODEL */}
              <div className="rounded-xl border border-white/10 bg-[#0b0b0b] p-8">
                <h3 className="text-xl font-medium mb-4">Old Model</h3>

                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Fixed monthly fees ($200 or $5,000)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Tier-dependent rate limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Monthly caps on objects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Costs jump with tiered plans</span>
                  </li>
                </ul>
              </div>

              {/* NEW MODEL */}
              <div className="rounded-xl border border-white/20 bg-linear-to-br from-[#111] to-[#0b0b0b] p-8">
                <h3 className="text-xl font-medium mb-4">New Model</h3>

                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>Usage-based: Pay only for what you use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>Less restrictive rate limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>No monthly caps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>Costs scale naturally with usage</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>


        <section className="w-full bg-black text-white py-10 pb-30 mb-10 border-b border-white/10">
          <div className="max-w-225 mx-auto px-6 text-center">

            {/* TITLE */}
            <h2 className="text-[48px] font-medium tracking-tight mb-6">
              Ready to get started?
            </h2>

            {/* SUBTITLE */}
            <p className="text-lg text-white/60 mb-14">
              Start building with the X API using our new pay-per-use model today.
            </p>

            {/* CTA BUTTON */}
            <div className="flex justify-center">
              <button
                className="
                  flex items-center gap-3
                  bg-white text-black
                  px-8 py-4
                  rounded-full
                  text-base font-medium
                  shadow-[0_0_40px_rgba(255,255,255,0.25)]
                  transition
                  hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]
                "
              >
                Go to Console
                <span className="text-lg">→</span>
              </button>
            </div>

          </div>
        </section>


        <footer className="relative w-full bg-black text-white pt-20 pb-24 overflow-hidden">

          {/* BACKGROUND GRADIENT */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.9)_55%,#000_100%)]" />

          {/* BOTTOM FADE */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-linear-to-t from-[#6b6b6b]/30 via-transparent to-transparent" />

          {/* FADED X LOGO — MOVED UP */}
          <div className="pointer-events-none absolute inset-x-0 top-18 flex justify-center">
            <img
              src={XLogo}
              alt="X"
              className="w-42 h-42 opacity-[0.2]"
            />
          </div>

          {/* CONTENT */}
          <div className="relative max-w-full mx-75 ">

            {/* LINKS — CLEARLY BELOW X */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-45 mb-28 mt-64">

              {/* PRODUCT */}
              <div>
                <div className="text-xs tracking-[0.25em] text-white/50 mb-6">
                  PRODUCT
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Features</li>
                  <li>Live Data</li>
                  <li>Pricing</li>
                  <li>Comparison</li>
                </ul>
              </div>

              {/* DEVELOPER */}
              <div className="ml-4">
                <div className="text-xs tracking-[0.25em] text-white/50 mb-6">
                  DEVELOPER
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Developer Console</li>
                  <li>API Documentation</li>
                  <li>Developer Forum</li>
                  <li>API Status</li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div className="ml-18">
                <div className="text-xs tracking-[0.25em] text-white/50 mb-6">
                  RESOURCES
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Support</li>
                </ul>
              </div>

            </div>

            {/* COPYRIGHT */}
            <div className="text-center text-white/50 text-sm -mb-10">
              © 2026 X Corp. All rights reserved.
            </div>

          </div>
        </footer>

      </section>
  );
};

export default DevelopersFooter;