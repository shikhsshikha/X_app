import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthListener = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);

      if (user) {
        navigate("/home");
      }
    });

    return () => unsub();
  }, [navigate]);

  return null;
};

export default AuthListener;