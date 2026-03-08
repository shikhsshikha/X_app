import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import RightWrapper from "./components/RightWrapper";
import Footer from "./components/Footer";
import SignupGoogle from "./components/auth/SignupGoogle";
import SignupApple from "./components/auth/SignupApple";
import CreateAccount from "./components/additionalPages/CreateAccount";
import SignIn from "./components/additionalPages/SignIn";
import GrokRedirect from "./components/auth/GrokRedirect";
import footerRoutes from "./components/footer-pages/footerRoutes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import VerifyUsername from "./components/auth/VerifyUsername";
import { useState } from "react";
import Feed from "./components/feed/Feed";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthListener from "./components/auth/AuthListener";
import { Navigate } from "react-router-dom";


const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);


  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">

      <AuthListener />
      
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            auth.currentUser ? <Navigate to="/home" replace /> : (
              <>
                <div className="flex flex-col md:flex-row">
                  <LeftPanel />
                  <div className="w-30 hidden md:block" />
                  <RightWrapper onSignupSuccess={() => setShowVerifyPopup(true)} />
                </div>
                <div className="h-12" />
              </>
            )
          }
        />


        {/* Auth routes */}
        
        <Route path="/signup/apple" element={<SignupApple />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/grok-redirect" element={<GrokRedirect />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />

        {/* Footer pages */}
        {footerRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        
      </Routes>

      {showVerifyPopup && (
        <VerifyUsername onClose={() => setShowVerifyPopup(false)} />
      )}

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
