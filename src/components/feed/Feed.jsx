import { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

/* ICONS */
const icons = {
  comment: "https://img.icons8.com/?size=100&id=143&format=png&color=FFFFFF",
  retweet: "https://img.icons8.com/?size=100&id=7Gc3zAVnhfkK&format=png&color=FFFFFF",
  likeWhite: "https://img.icons8.com/?size=100&id=87&format=png&color=FFFFFF",
  likeRed: "https://img.icons8.com/?size=100&id=MuTaB70tsX7L&format=png&color=FA5252",
  share: "https://img.icons8.com/?size=100&id=mbbuOVGwvhrI&format=png&color=FFFFFF",
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const loaderRef = useRef(null);
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  /* LOGOUT */
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  /* FETCH POSTS */
  const fetchPosts = async () => {
    if (!API_KEY || loading) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=25&apiKey=${API_KEY}`
      );
      const data = await res.json();

      const enrichedPosts = data.articles.map((post, index) => {
        const randomMinutesAgo = Math.floor(Math.random() * 600);

        const fakeTime = new Date(
          Date.now() - randomMinutesAgo * 60 * 1000
        );

        return {
          ...post,

          image: post.urlToImage || `https://picsum.photos/seed/${index}/500/400`,

          publishedAt: fakeTime,

          liked: false,
          likesCount: Math.floor(Math.random() * 200),
          retweeted: false,
          retweetsCount: Math.floor(Math.random() * 100),
          commentsCount: Math.floor(Math.random() * 50),
          showComment: false,

          verified: ["BBC News", "CNN", "Reuters", "The Verge"].includes(
            post.source?.name
          ),

          postsCount: Math.floor(Math.random() * 500000),

          tag:
            post.title
              ?.split(" ")
              .find((w) => w.length > 6)
              ?.replace(/[^a-zA-Z]/g, "") || "Trending",
        };
      });

      setPosts((prev) => [...prev, ...enrichedPosts]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  

  /* INITIAL LOAD */
  useEffect(() => {
    fetchPosts();
  }, []);

  /* INFINITE SCROLL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchPosts();
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); 

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getTimeAgo = (date) => {
    const diff = currentTime - new Date(date);

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (60 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return "Just now";
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days}d`;
    if (weeks < 5) return `${weeks}w`;
    if (months < 12) return `${months}mo`;

    return `${years}y`;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-[#0f1419] to-black text-white">

      {/* TOP BAR */}
      <div className="sticky top-0 z-20 bg-black/70 backdrop-blur border-b border-gray-800">
        <div className="max-w-xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">Home</h1>

          {/* PROFILE / LOGOUT */}
          <div className="relative" ref={menuRef}>
          {/* Avatar Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center font-bold"
          >
            {auth.currentUser?.displayName?.[0] || "U"}
          </button>

          {/* Logout Dropdown */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-black border border-gray-700 rounded-lg shadow-lg">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        </div>
      </div>

      {/* FEED */}
      <div className="max-w-xl mx-auto border-x border-gray-800 bg-black/40">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-4 border-b border-gray-800 hover:bg-white/5 transition"
          >
            <div className="flex gap-3">
              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                {post.source?.name?.[0] || "N"}
              </div>

              <div className="flex-1">
                {/* HEADER */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold">{post.source?.name}</span>

                  {post.verified && (
                    <img
                      src="https://img.icons8.com/fluency/48/verified-badge.png"
                      className="w-4 h-4"
                    />
                  )}

                  <span className="text-gray-500">
                    · {getTimeAgo(post.publishedAt)} ago
                  </span>
                </div>

                {/* CONTENT */}
                <h3 className="font-semibold mt-1 leading-snug">
                  {post.title}
                </h3>

                {post.description && (
                  <p className="text-gray-400 text-sm mt-1">
                    {post.description}
                  </p>
                )}

                {/* TRENDING TAGS */}
                {post.tag && (
                  <div className="text-[#1d9bf0] text-sm mt-2">
                    #{post.tag}
                  </div>
                )}

                {/* POSTS COUNT */}
                <div className="text-gray-500 text-xs mt-1">
                  {post.postsCount.toLocaleString()} posts
                </div>

                {/* IMAGE */}
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="rounded-xl mt-3 w-full max-h-96 object-cover border border-gray-800"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${index}/500/400`;
                    }}
                  />
                )}

                {/* ACTIONS */}
                <div className="flex justify-between items-center text-gray-500 text-sm mt-4 max-w-md">

                  {/* COMMENT */}
                  <button
                    onClick={() =>
                      setPosts((prev) =>
                        prev.map((p, i) =>
                          i === index
                            ? { ...p, showComment: !p.showComment }
                            : p
                        )
                      )
                    }
                    className="flex items-center gap-3 hover:text-blue-400 transition"
                  >
                    <img src={icons.comment} className="w-5 h-5" />
                    {post.commentsCount}
                  </button>

                  {/* RETWEET */}
                  <button
                    onClick={() =>
                      setPosts((prev) =>
                        prev.map((p, i) =>
                          i === index
                            ? {
                                ...p,
                                retweeted: !p.retweeted,
                                retweetsCount: p.retweeted
                                  ? p.retweetsCount - 1
                                  : p.retweetsCount + 1,
                              }
                            : p
                        )
                      )
                    }
                    className={`flex items-center gap-3 transition ${
                      post.retweeted
                        ? "text-green-400"
                        : "hover:text-green-400"
                    }`}
                  >
                    <img src={icons.retweet} className="w-5 h-5" />
                    {post.retweetsCount}
                  </button>

                  {/* LIKE */}
                  <button
                    onClick={() =>
                      setPosts((prev) =>
                        prev.map((p, i) =>
                          i === index
                            ? {
                                ...p,
                                liked: !p.liked,
                                likesCount: p.liked
                                  ? p.likesCount - 1
                                  : p.likesCount + 1,
                              }
                            : p
                        )
                      )
                    }
                    className="flex items-center gap-3"
                  >
                    <img
                      src={post.liked ? icons.likeRed : icons.likeWhite}
                      className={`w-5 h-5 transition ${
                        post.liked ? "animate-heart" : ""
                      }`}
                    />
                    <span className="text-gray-500">{post.likesCount}</span>
                  </button>

                  {/* SHARE */}
                  <button
                    onClick={() => alert("Share this post")}
                    className="flex items-center gap-3 hover:text-blue-400 transition"
                  >
                    <img src={icons.share} className="w-5 h-5" />
                  </button>
                </div>

                {/* COMMENT BOX */}
                {post.showComment && (
                  <input
                    placeholder="Write a comment…"
                    className="w-full mt-3 bg-black border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        {/* LOADER */}
        <div ref={loaderRef} className="h-24 flex justify-center items-center">
          {loading && <p className="text-gray-500">Loading more...</p>}
        </div>
      </div>

      {/* FLOATING + BUTTON */}
      <button
        onClick={() => alert("Post creation coming next 😉")}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white text-3xl flex items-center justify-center shadow-xl hover:scale-105 transition"
      >
        +
      </button>
    </div>
  );
};

export default Feed;