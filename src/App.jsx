import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import RightWrapper from "./components/RightWrapper";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import SignupGoogle from "./components/auth/SignupGoogle";
import SignupApple from "./components/auth/SignupApple";
import CreateAccount from "./components/auth/CreateAccount";
import SignIn from "./components/auth/SignIn";
import GrokRedirect from "./components/auth/GrokRedirect";


/* Simple placeholder for other pages */
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
    {title}
  </div>
);

const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            <>
              <div className="flex">
                <LeftPanel />
                <div className="w-30" />
                <RightWrapper />
              </div>
              <div className="h-12" />
            </>
          }
        />

        {/* Auth routes */}
        <Route path="/signup/google" element={<SignupGoogle />} />
        <Route path="/signup/apple" element={<SignupApple />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/grok-redirect" element={<GrokRedirect />} />

        {/* Footer pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/download" element={<PlaceholderPage title="Download the X App" />} />
        <Route path="/grok" element={<PlaceholderPage title="Grok" />} />
        <Route path="/help" element={<PlaceholderPage title="Help Center" />} />
        <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
        <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
        <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
        <Route path="/accessibility" element={<PlaceholderPage title="Accessibility" />} />
        <Route path="/ads" element={<PlaceholderPage title="Ads Info" />} />
        <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
        <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
        <Route path="/brand" element={<PlaceholderPage title="Brand Resources" />} />
        <Route path="/advertising" element={<PlaceholderPage title="Advertising" />} />
        <Route path="/marketing" element={<PlaceholderPage title="Marketing" />} />
        <Route path="/business" element={<PlaceholderPage title="X for Business" />} />
        <Route path="/developers" element={<PlaceholderPage title="Developers" />} />
        <Route path="/news" element={<PlaceholderPage title="News" />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
      </Routes>

      {/* ✅ Footer ONLY on main login page */}
      {location.pathname === "/" && <Footer />}
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};


export default App;
