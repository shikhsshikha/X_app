import { useEffect } from "react";

const GrokRedirect = () => {
  useEffect(() => {
    window.location.href = "https://grok.com/";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      Redirecting to Grok…
    </div>
  );
};

export default GrokRedirect;
