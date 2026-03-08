import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";

const AuthListener = () => {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
    });

    return () => unsub();
  }, []);

  return null;
};

export default AuthListener;