import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6QAuOLUzgWZZzLRS_Zqk_Io2xGfjXZsw",
  authDomain: "x-clone-c531e.firebaseapp.com",
  projectId: "x-clone-c531e",
  storageBucket: "x-clone-c531e.firebasestorage.app",
  messagingSenderId: "863514472342",
  appId: "1:863514472342:web:83c4bbd0597a7cb75e37b7",
  measurementId: "G-PTFV7HBBM9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const googleProvider = new GoogleAuthProvider();

// ✅ Apple
const appleProvider = new OAuthProvider("apple.com");

export { auth, googleProvider, appleProvider };