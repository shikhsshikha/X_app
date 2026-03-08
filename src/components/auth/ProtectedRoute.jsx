import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  if (user === undefined) return null; // or loader
  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;