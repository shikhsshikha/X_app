import XLogo from "../../assets/X-logo.png";
import BaseFooter from "../BaseFooter";

const BlogFooter = () => {
  return (
    <div className="bg-white text-[#0f1419]">

      {/* ================= NAVBAR ================= */}
      <header className="bg-black text-white">
        <div className="max-w-full ml-4 h-20 flex">

          <div className="flex items-center gap-2">
            <img src={XLogo} alt="X" className="h-9 w-9" />
            <span className="text-[20px] font-semibold">Blog</span>
          </div>

          <div className="w-12"></div>

          <nav className="flex items-center gap-8 text-[14px] text-white/80">
            <span>Blog</span>
            <span>Events</span>
            <span>Product</span>
            <span>Insights</span>
            <span>Company</span>
            <span>Other blogs</span>

            <div className="w-140"></div>

            <div className="flex items-center  gap-4 ml-6">
              <div className="flex items-center gap-1">
                <span>English (US) </span>
                <img
                  src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                  className="h-4 w-4"
                  alt=""
                />
              </div>
              
                
              <button className="px-5 py-2 rounded-full border border-white/40">
                Sign Up
              </button>
            </div>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-140 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-384 pt-35 mx-20 px-12 h-full flex flex-col justify-center">
          <span className="text-[14px] tracking-wide mb-4">Company</span>

          <h1 className="text-[70px] leading-[1.1] font-bold max-w-full">
            Building the future of X
          </h1>

          <p className="mt-6 text-[14px] text-white/80">
            By <span className="underline cursor-pointer">Linda Yaccarino</span> on Wednesday, 2 August 2023
          </p>

          <div className="flex  gap-4 mt-4 text-white/80 text-[18px]">
            <span>X</span>
            <span>f</span>
            <span>in</span>
            <span>🔗</span>
          </div>
        </div>
      </section>

      {/* ================= LATEST POSTS ================= */}
      <section className="max-w-8xl mx-30 px-6 py-24">
        <div className="grid grid-cols-[200px_1fr] gap-40">

          <h2 className="text-[22px] font-bold">Latest posts</h2>

          <div className="space-y-16">

            {/* Post 1 */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] hover:text-black font-bold mt-3 text-[#536471] leading-[1.3]">
                X's report in compliance with Regulation (EU) 2021/1232
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                Sunday, 19 May 2024
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 2 */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
                Creator Targeting: Select and connect with creators<br /> on X
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">X Business</span> on Monday, 12 February 2024
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 3  */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
               An update on our work to tackle Child Sexual<br /> Exploitation on X
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">X Safety</span> on  Wednesday, 31 January 2024
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 4  */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
               Safeguarding Information Independence and<br /> Combating Hate Speech
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">Linda Yaccarino</span> on Monday, 22 January 2024
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 5  */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
               Transforming the Global Town Square
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">X Business</span> on Tuesday, 9 January 2024
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 6  */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
               X’s Vertical Video Revolution: Expanded Brand<br /> Safety Controls for Advertisers
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">X Business</span> on Monday, 8 January 2024
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 7  */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
               Stand with X to protect free speech
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">X Business</span> on Saturday, 18 November 2023
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 8  */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
               Maintaining the safety of X in times of conflict
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">X Safety</span> on Tuesday, 14 November 2023
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 9  */}
            <div>
              <span className="text-[14px] font-bold text-[#8b98a5]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
               One year in, the future of X is bright
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">Linda Yaccarino</span> on Thursday, 26 October 2023
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            {/* Post 10 */}
            <div>
              <span className="text-[14px] font-bold text-[#536471]">Company</span>
              <h3 className="text-[32px] font-bold mt-3 text-[#536471] leading-[1.3]">
                X’s community-led approach: tackling inaccurate & misleading information
              </h3>
              <p className="mt-4 text-[14px] text-[#8b98a5]">
                By <span className="underline text-black">Keith Coleman</span> on Tuesday, 24 October 2023
              </p>
            </div>

            <hr className="border-[#e6ecf0]" />

            <button className="text-[32px] font-bold text-left mb-20">
              See more
            </button>

          </div>
          
        </div>
        <hr className="border-[#e6ecf0] -mb-12" />
      </section>

      {/* ================= POPULAR TAGS ================= */}
      <section className="w-full mx-30 pb-32">
        <h2 className="text-[24px] font-bold mb-10">Popular tags</h2>

        <p className="text-[#7cc6f7] text-[43px] leading-[1.1] font-bold">
          <span className="hover:text-black duration-400 ease-in-out">policy</span>, 
          <span className="hover:text-black duration-400 ease-in-out">data</span>, 
          <span className="hover:text-black duration-400 ease-in-out">sports</span>, 
          <span className="hover:text-black duration-400 ease-in-out">product</span>, 
          <span className="hover:text-black duration-400 ease-in-out">safety</span>, 
          <span className="hover:text-black duration-400 ease-in-out">marketing</span>,<br /> 
          <span className="hover:text-black duration-400 ease-in-out">transparency</span>,
          <span className="hover:text-black duration-400 ease-in-out">Twitter for Good</span>, 
          <span className="hover:text-black duration-400 ease-in-out">government</span>, 
          <span className="hover:text-black duration-400 ease-in-out">health</span>, 
          <span className="hover:text-black duration-400 ease-in-out">partnerships</span>, 
          <span className="hover:text-black duration-400 ease-in-out">diversity</span>
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <BaseFooter />

    </div>
  );
};

export default BlogFooter;