import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import RightWrapper from "./components/RightWrapper";
import Footer from "./components/Footer";
import SignupGoogle from "./components/auth/SignupGoogle";
import SignupApple from "./components/auth/SignupApple";
import CreateAccount from "./components/auth/CreateAccount";
import SignIn from "./components/auth/SignIn";
import GrokRedirect from "./components/auth/GrokRedirect";
import footerRoutes from "./components/footer-pages/footerRoutes";


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
        {footerRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        
      </Routes>

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
