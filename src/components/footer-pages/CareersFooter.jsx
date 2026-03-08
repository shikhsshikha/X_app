import XLogo from "../../assets/logo-white.png";

const CareersFooter = () => {
  return (
    <div className="w-full text-white">

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-60 bg-transparent">
        <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between text-white">

          {/* NAV LEFT */}
          <div className="flex items-center gap-10 text-sm tracking-wide text-white">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z" />
            </svg>

            <span className="opacity-60 hover:opacity-100 transition">GROK</span>
            <span className="opacity-60 hover:opacity-100 transition">API</span>
            <span className="opacity-60 hover:opacity-100 transition">COMPANY</span>
            <span className="opacity-60 hover:opacity-100 transition">COLOSSUS</span>
            <span className="opacity-100">CAREERS</span>
            <span className="opacity-60 hover:opacity-100 transition">NEWS</span>
            <span className="opacity-60 hover:opacity-100 transition">SHOP</span>
            <span className="opacity-60 hover:opacity-100 transition">SPACEX</span>

            <img
              src={XLogo}
              className="h-3 w-3 opacity-60 hover:opacity-100 transition"
              alt=""
            />
          </div>

          {/* NAV RIGHT */}
          <button className="px-6 py-2 rounded-full border border-white/40 text-sm text-white hover:bg-white hover:text-black transition">
            TRY GROK
          </button>
        </div>
      </header>

      {/* GRADIENT HERO SECTION */}
      <section>

        <div className="absolute inset-0 bg-linear-to-b from-[#6a563f] via-[#1a1a1a] to-black" />

        {/* CONTENT WRAPPER */}
        <div className="relative">

          {/* HERO TEXT */}
          <section className="max-w-full mx-30 px-10 pt-30 text-white">
            <p className="text-xs tracking-widest opacity-60 mb-10">
              [ OUR PURPOSE ]
            </p>

            <h1 className="text-[74px] leading-19">
              Build AI That
              <br />
              <span className="opacity-50">Advances Humanity</span>
            </h1>

            <button className="mt-10 px-6 py-2 rounded-full border text-black bg-white border-white text-sm hover:transition hover:bg-gray-200 cursor-pointer">
              VIEW OPEN ROLES
            </button>
          </section>

          {/* ARROW + PARAGRAPH */}
          <section className="flex items-center justify-between px-40 pt-40">
            <img
              src="https://img.icons8.com/?size=100&id=41189&format=png&color=ffffff"
              alt=""
              className="h-5 w-6"
            />

            <p className="text-base leading-relaxed opacity-90">
              We are a team of AI technologists and business leaders on a mission to
              build AI systems
              <br />
              that can help humanity understand the world better.
            </p>
          </section>

        </div>

        {/* FULL WIDTH DIVIDER */}
        <div className="relative w-full pt-12">
          <div className="w-full h-px bg-white/15" />
        </div>

        {/* OUR PRINCIPLES */}
        <section className="max-w-full mx-40 pt-32 pb-40 grid grid-cols-2 gap-80">
          <div>
            <p className="text-xs tracking-widest opacity-60 mb-6">
              [ OUR PRINCIPLES ]
            </p>
            <h2 className="text-[48px] font-light">
              Coding ≥ x ∀ x
            </h2>
          </div>

          <p className="text-base text-white opacity-80 leading-relaxed">
            We are driven by ambitious goals, fast execution, and a<br /> strong sense
            of urgency. Join us if you want to shape the<br /> next generation of AI
            models and products.
          </p>
        </section>

        {/* BENEFITS GRID */}
        <section className="max-w-full mx-40 px-10 pb-10 relative">

          {/* VERTICAL DIVIDERS */}
          <span className="absolute top-0 bottom-0 left-0 w-px bg-white/20" />

          {/* MIDDLE DIVIDER */}
          <span className="absolute top-0 bottom-0 left-1/3 w-px bg-white/20" />

          {/* RIGHT DIVIDER */}
          <span className="absolute top-0 bottom-0 left-2/3 w-px bg-white/20" />

          {/* CONTENT */}
          <div className="grid grid-cols-3 gap-x-20 gap-y-28">

            {/* COLUMN 1 */}
            <div className="space-y-24 pt-10">
              <div>
                <div className="mb-10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="11"
                      r="4"
                      stroke="white"
                      stroke-width="1.5"
                    />

                    <path
                      d="M6.5 25c1.8-4.8 6-7 9.5-7s7.7 2.2 9.5 7"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg mb-4">Competitive compensation</h3>
                <p className="text-md text-white/60 leading-relaxed">
                  Competitive cash and equity-based<br /> compensation packages to attract<br /> top talent.
                </p>
              </div>

              <div>
                <div className="mb-10">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4.5"
                      y="6.5"
                      width="17"
                      height="15"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="square"
                      stroke-linejoin="miter"
                    />

                    <line
                      x1="4.5"
                      y1="10"
                      x2="21.5"
                      y2="10"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="square"
                    />

                    <line
                      x1="8"
                      y1="3.5"
                      x2="8"
                      y2="6.5"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="square"
                    />
                    <line
                      x1="18"
                      y1="3.5"
                      x2="18"
                      y2="6.5"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="square"
                    />

                    <rect x="8" y="12.5" width="1.8" height="1.8" fill="white" />
                    <rect x="12" y="12.5" width="1.8" height="1.8" fill="white" />
                    <rect x="16" y="12.5" width="1.8" height="1.8" fill="white" />

                    <rect x="8" y="16.5" width="1.8" height="1.8" fill="white" />
                    <rect x="12" y="16.5" width="1.8" height="1.8" fill="white" />
                    <rect x="16" y="16.5" width="1.8" height="1.8" fill="white" />
                  </svg>
                </div>
                <h3 className="text-lg mb-4">Flexible vacation</h3>
                <p className="text-md text-white/60 leading-relaxed">
                  We work hard but avoid burn out. Take<br /> time off when you need it.
                </p>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-24 pt-10">
              <div>
                <div className="h-10 w-8 mb-7 ">
                  <img src="https://img.icons8.com/?size=100&id=nzJl8PDRUSrs&format=png&color=FFFFFF" alt="" />
                </div>
                <h3 className="text-lg mb-4">Health and wellness</h3>
                <p className="text-md text-white/60 leading-relaxed">
                  Comprehensive health insurance including medical, dental, vision, and disability coverage.
                </p>
              </div>

              <div>
                <div className="mb-10">
                  <img src="https://img.icons8.com/?size=100&id=3685&format=png&color=ffffff" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-lg mb-4">Visa sponsorship</h3>
                <p className="text-md text-white/60 leading-relaxed">
                  We support international talent with visa sponsorship to join our team.
                </p>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="space-y-24 pt-8">
              <div>
                <div className="mb-7">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 23
                        L4.5 14
                        L4.5 11
                        L7.5 8
                        L11.5 8
                        L14 10.5
                        L16.5 8
                        L20.5 8
                        L23.5 11
                        L23.5 14
                        L14 23"
                      stroke="white"
                      stroke-width="1.3"
                      stroke-linejoin="miter"
                      stroke-linecap="butt"
                    />
                  </svg>
                </div>
                <h3 className="text-lg mb-4">Life and family</h3>
                <p className="text-md text-white/60 leading-relaxed">
                  Life and AD&D insurance and fertility<br /> benefits to ensure our team’s well-being<br /> and peace of mind.
                </p>
              </div>

              <div>
                <div className="mb-10">
                  <img src="https://img.icons8.com/?size=100&id=lIfrRFKmvhgJ&format=png&color=FFFFFF" alt="" className="w-9 h-9" />
                </div>
                <h3 className="text-lg mb-4">401(k) plan</h3>
                <p className="text-md text-white/60 leading-relaxed">
                  Retirement savings plan to secure your financial future.
                </p>
              </div>
            </div>

          </div>
        </section>
      </section>

      {/* BLACK SECTION */}
      <section className="bg-black">

        {/* FEATURED ROLES */}
        <section className="max-w-full mx-40  py-40 grid grid-cols-2 text-white">

          {/* LEFT */}
          <div>
            <p className="text-[13px] tracking-widest opacity-60 mb-6">
              [ JOIN US ]
            </p>
            <h2 className="text-[48px] tracking-tight font-light">
              Featured roles
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 text-md -ml-15">

            {[
              {
                title: "Network Development Engineer, ML Infrastructure (High-…",
                location: "Palo Alto, CA",
              },
              {
                title: "Member of Technical Staff, Frontiers of Deep Learning…",
                location: "Palo Alto, CA",
              },
              {
                title: "Member of Technical Staff, Image Generation – Agent, RL",
                location: "Palo Alto, CA; Seattle, WA",
              },
              {
                title: "Member of Technical Staff, Web Scale Video Data",
                location: "Palo Alto, CA",
              },
              {
                title: "Exceptional Software Engineer (London)",
                location: "London, UK",
              },
              {
                title: "Exceptional Software Engineer",
                location: "Palo Alto, CA",
              },
            ].map(({ title, location }) => (
              <div
                key={title}
                className="flex items-center justify-between gap-3"
              >
                {/* Role */}
                <span className="text-white text-md hover:underline cursor-pointer">
                  {title}
                </span>

                {/* Location + arrow */}
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span>{location}</span>
                  <span className="text-lg">
                    <img src="https://img.icons8.com/?size=100&id=14906&format=png&color=B0B0B0" alt="" className="w-5 h-5" />
                  </span>
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="pt-8">
              <div className="w-full h-px bg-white/10" />
            </div>

            {/* View all */}
            <div className="pt-6 text-center">
              <span className="text-white/60 text-[16px] hover:text-white transition cursor-pointer">
                View all open roles
              </span>
            </div>

          </div>
        </section>

        {/* INTERVIEW PROCESS */}
        <section className="max-w-full mx-40 pt-20 pb-40">

          {/* HEADER ROW */}
          <div className="grid grid-cols-2 gap-80 mb-32">
            {/* LEFT */}
            <div>
              <p className="text-xs tracking-[0.25em] text-white/50 mb-8">
                [ WHAT TO EXPECT ]
              </p>
              <h2 className="text-[48px] font-light text-white">
                Interview process
              </h2>
            </div>

            {/* RIGHT */}
            <p className="text-[15px] pt-15 text-white">
              We generally do not use recruiters for assessments.
              Applications are evaluated by our technical team members.
              Interviews will be conducted via virtual meetings and/or onsite.
            </p>
          </div>

          {/* STEPS */}
          <div className="space-y-12">

            {/* STEP 1 */}
            <div className="grid grid-cols-[120px_1fr] gap-60">
              <p className="text-sm tracking-widest text-white/50">
                STEP 1
              </p>

              <div>
                <h4 className="text-white text-lg mb-3">
                  Submit your application
                </h4>
                <p className="text-md text-white/60 mb-6 max-w-lg">
                  Our team will review your CV and statement of exceptional work.
                </p>

                <button className="px-6 py-2 rounded-full border border-white/40 text-xs tracking-widest text-white hover:bg-white hover:text-black transition">
                  APPLY NOW
                </button>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="grid grid-cols-[120px_1fr] gap-60">
              <p className="text-sm tracking-widest text-white/50">
                STEP 2
              </p>

              <div>
                <h4 className="text-white text-lg mb-3">
                  Screening Interview
                </h4>
                <p className="text-md text-white/60 max-w-full">
                  A short interview to learn more about you and assess if the role fits
                  both you and xAI.<br /> Prepare for short technical questions and a review
                  of your background and experience.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="grid grid-cols-[120px_1fr] gap-60">
              <p className="text-sm tracking-widest text-white/50">
                STEP 3
              </p>

              <div>
                <h4 className="text-white text-lg mb-3">
                  Technical Interviews
                </h4>
                <p className="text-md text-white/60 max-w-full">
                  Sessions where we dive deep into your technical expertise. This isn’t
                  just<br /> about solving puzzles; it’s about understanding how you approach
                  complex<br /> problems, your coding style, and your ability to think critically under pressure.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="grid grid-cols-[120px_1fr] gap-60">
              <p className="text-sm tracking-widest text-white/50">
                STEP 4
              </p>

              <div>
                <h4 className="text-white text-lg mb-3">
                  Offer Extended
                </h4>
                <p className="text-md text-white/60 max-w-full">
                  We value transparency and efficiency, so expect a prompt decision. If you've<br /> demonstrated the exceptional skills and mindset we're looking for, we'll extend<br /> an offer to join xAI. This isn't just a job offer; it's an invitation to be part of a team<br /> that's pushing the boundaries of AI to accelerate human scientific discovery.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="relative max-w-full mx-40 py-30 text-white">

          <div className="grid grid-cols-2 gap-52 items-center">

            {/* LEFT CONTENT */}
            <div>
              <p className="text-xs tracking-[0.25em] text-white/50 mb-8">
                [ OFFICES ]
              </p>

              <h2 className="text-[50px] leading-tight font-light mb-8">
                Collaboration<br />across borders
              </h2>

              <p className="text-base leading-relaxed text-white max-w-md mb-12">
                We are hiring across all our offices in our Palo Alto<br /> headquarters,
                Seattle, San Francisco, Tennessee,<br /> and London UK. We prioritize
                in-person work to<br /> support our fast-paced, collaborative projects.<br />
                Exceptional candidates are welcome to apply from anywhere.
              </p>

              <button className="px-6 py-2 rounded-full border border-white/40 text-sm tracking-widest hover:bg-gray-100 hover:text-black transition">
                VIEW OPEN ROLES
              </button>
            </div>

            {/* RIGHT GLOBE */}
            <div className="relative flex justify-center items-center">

              {/* Globe SVG */}
              <svg
                viewBox="0 0 600 600"
                className="w-130 h-130"
                fill="none"
              >
                {/* Globe outline */}
                <circle
                  cx="300"
                  cy="300"
                  r="220"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />

                {/* Continents (stylized lines) */}
                <path
                  d="M190 180c40-30 90-20 120-10 40 10 70 0 110 30"
                  stroke="white"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <path
                  d="M220 360c40 20 90 30 130 20"
                  stroke="white"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />

                {/* ORANGE ARCS */}
                <path
                  d="M160 260 C240 180, 360 180, 440 240"
                  stroke="#ff6a00"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M200 300 C300 220, 420 260, 460 320"
                  stroke="#ff6a00"
                  strokeWidth="2"
                  fill="none"
                />

                {/* MARKERS */}
                {/* San Francisco */}
                <rect x="230" y="270" width="10" height="10" fill="#ff6a00" />
                <text x="250" y="275" fill="white" fontSize="12">
                  SAN FRANCISCO
                </text>
                <text x="250" y="292" fill="white" opacity="0.6" fontSize="11">
                  37.7749°N, 122.4194°W
                </text>

                {/* Seattle */}
                <rect x="245" y="235" width="10" height="10" fill="#ff6a00" />
                <text x="265" y="240" fill="white" fontSize="12">
                  SEATTLE
                </text>
                <text x="265" y="257" fill="white" opacity="0.6" fontSize="11">
                  47.6062°N, 122.3321°W
                </text>

                {/* London */}
                <rect x="410" y="215" width="10" height="10" fill="#ff6a00" />
                <text x="430" y="220" fill="white" fontSize="12">
                  LONDON
                </text>
                <text x="430" y="237" fill="white" opacity="0.6" fontSize="11">
                  51.5074°N, 0.1278°W
                </text>
              </svg>

            </div>
          </div>
        </section>

        <section
          className="relative w-full text-white"
          style={{
            background: `
            radial-gradient(
              140% 90% at 50% 100%,
              rgba(255, 140, 90, 0.45) 0%,
              rgba(255, 140, 90, 0.18) 28%,
              rgba(20, 20, 20, 0.9) 65%,
              #000 85%
            ),
            radial-gradient(
              120% 80% at 50% 0%,
              rgba(255,255,255,0.06) 0%,
              rgba(255,255,255,0.02) 25%,
              transparent 60%
            ),
            #000
          `,
          }}
        >
          <div className="max-w-full mx-40 pt-32 pb-100">

            <div className="grid grid-cols-5 gap-24 text-sm">

              {/* COLUMN 1 */}
              <div>
                <p className="text-md tracking-normal text-white/40 mb-8">
                  TRY GROK ON
                </p>
                <ul className="space-y-4 text-[16px] text-white">
                  <li>Web</li>
                  <li>iOS</li>
                  <li>Android</li>
                  <li>Grok on X</li>
                </ul>
              </div>

              {/* COLUMN 2 */}
              <div>
                <p className="text-md tracking-normal text-white/40 mb-8">
                  PRODUCTS
                </p>
                <ul className="space-y-4 text-[16px] text-white">
                  <li>Grok</li>
                  <li>X</li>
                  <li>Grok Enterprise</li>
                  <li>Grokipedia</li>
                </ul>
              </div>

              {/* COLUMN 3 */}
              <div>
                <p className="text-md tracking-normal text-white/40 mb-8">
                  API
                </p>
                <ul className="space-y-4 text-[16px] text-white">
                  <li>Overview</li>
                  <li>Voice API</li>
                  <li>Imagine API</li>
                  <li>Pricing</li>
                  <li>API Console Login</li>
                  <li>Documentation</li>
                </ul>
              </div>

              {/* COLUMN 4 */}
              <div>
                <p className="text-md tracking-normal text-white/40 mb-8">
                  COMPANY
                </p>
                <ul className="space-y-4 text-[16px] text-white">
                  <li>Company</li>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>News</li>
                </ul>
              </div>

              {/* COLUMN 5 */}
              <div>
                <p className="text-md tracking-normal text-white/40 mb-8">
                  RESOURCES
                </p>
                <ul className="space-y-4 text-[16px] text-white">
                  <li>Privacy policy</li>
                  <li>Security</li>
                  <li>Safety</li>
                  <li>Legal</li>
                  <li>Status</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </section>
    </div>
  );
};

export default CareersFooter;