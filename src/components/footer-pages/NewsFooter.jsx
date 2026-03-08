import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import AuthButtons from "../AuthButtons";
import SignIn from "../additionalPages/SignIn";
import SignUp from "../additionalPages/SignUp";
import CreateAccount from "../additionalPages/CreateAccount";
import VerifyUsername from "../auth/VerifyUsername";

const NewsFooter = () => {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);

  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);


  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  /* CHECK LOGIN */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  /* FETCH NEWS */
  useEffect(() => {
    if (!API_KEY) return;

    fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=25&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts = data.articles.map((article) => ({
          title: article.title,
          description: article.description,
          image: article.urlToImage,
          publishedAt: article.publishedAt,
          source: {
            name: article.source?.name
          }
        }));

        setArticles(formattedPosts);
      })
      .catch((err) => console.error(err));
  }, [API_KEY]);
  

  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">

      {/* MAIN CONTENT */}
      <div className="flex w-275">

        {/* NEWS FEED */}
        <div className="w-150 border-x border-gray-800">

          {/* HEADER */}
          <div className="sticky top-0 bg-black/70 backdrop-blur border-b border-gray-800 p-4 text-xl font-bold">
            ← News
          </div>

          {/* CATEGORY PILLS */}
          <div className="flex gap-3 overflow-x-auto px-4 py-3 border-b border-gray-800">
            {["Top Stories", "For You", "Politics", "Sports", "Business & Finance"].map(
              (item) => (
                <div
                  key={item}
                  className="px-4 py-2 bg-gray-900 rounded-full text-sm hover:bg-gray-800 cursor-pointer"
                >
                  {item}
                </div>
              )
            )}
          </div>

          {/* POSTS */}
          {articles.map((post, index) => (
            <div
              key={index}
              className="flex justify-between gap-4 p-4 border-b border-gray-800 hover:bg-white/5 cursor-pointer"
            >
              <div className="flex flex-col justify-between">

                <h3 className="font-bold text-lg leading-snug">
                  {post.title}
                </h3>

                <div className="text-gray-500 text-sm mt-2">
                  {post.source?.name} · News
                </div>

              </div>

              {post.image && (
                <img
                  src={post.image}
                  className="w-28 h-28 rounded-xl object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-105 px-6 pt-6 hidden lg:block">

          {!user && (
            <>
              {/* SIGNUP CARD */}
              <div className="border border-gray-800 rounded-2xl p-6 space-y-4 max-w-87.5">

                <h2 className="text-xl font-bold">
                  New to X?
                </h2>

                <p className="text-gray-400 text-[13px]">
                  Sign up now to get your own personalized timeline!
                </p>

                {/* AUTH BUTTONS */}
                <div className="space-y-3">
                  <AuthButtons
                    onSignupSuccess={() => setShowVerifyPopup(true)}
                  />
                </div>

                {/* CREATE ACCOUNT */}
                <button
                  onClick={() => setShowCreatePopup(true)}
                  className="w-full h-11 bg-white text-black rounded-full
                            font-bold text-[15px] hover:bg-gray-200 transition"
                >
                  Create account
                </button>

                {/* TERMS TEXT */}
                <p className="text-[11px] text-gray-400 leading-4 pt-2">
                  By signing up, you agree to the{" "}
                  <a href="/terms" target="_blank" className="text-[#1d9bf0] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" target="_blank" className="text-[#1d9bf0] hover:underline">
                    Privacy Policy
                  </a>
                  , including{" "}
                  <a href="/cookies" target="_blank" className="text-[#1d9bf0] hover:underline">
                    Cookie Use
                  </a>.
                </p>

              </div>


              {/* FOOTER LINKS (OUTSIDE CARD) */}
              <div className="text-[13px] text-gray-500 mt-4 max-w-87.5 space-y-2">

                <div className="flex flex-wrap gap-x-2">
                  <a href="/terms" target="_blank" className="hover:underline">
                    Terms of Service
                  </a>

                  <span>|</span>

                  <a href="/privacy" target="_blank" className="hover:underline">
                    Privacy Policy
                  </a>

                  <span>|</span>

                  <a href="/cookies" target="_blank" className="hover:underline">
                    Cookie Policy
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-2">
                  <a href="/accessibility" target="_blank" className="hover:underline">
                    Accessibility
                  </a>

                  <span>|</span>

                  <a href="/ads" target="_blank" className="hover:underline">
                    Ads info
                  </a>

                  <span>|</span>

                  <span className="hover:underline cursor-pointer">
                    More ...
                  </span>

                  <span className="ml-2">
                    © 2026 X Corp.
                  </span>
                </div>

              </div>
            </>
          )}

        </div>
        
      </div>

      

      {/* BLUE LOGIN BAR */}
      {!user && (
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

            <button
              onClick={() => setShowSignin(true)}
              className="border border-white px-5 py-2 rounded-full"
            >
              Log in
            </button>

            <button
              onClick={() => setShowSignup(true)}
              className="bg-white text-black px-5 py-2 rounded-full"
            >
              Sign up
            </button>

          </div>

        </div>
      )}

      {/* AUTH POPUPS */}
      {showSignin && <SignIn onClose={() => setShowSignin(false)} />}
      {showSignup && <SignUp onClose={() => setShowSignup(false)} />}
      {showVerifyPopup && (
        <VerifyUsername onClose={() => setShowVerifyPopup(false)} />
      )}

      {showCreatePopup && (
        <CreateAccount onClose={() => setShowCreatePopup(false)} />
      )}

    </div>
  );
};

export default NewsFooter;