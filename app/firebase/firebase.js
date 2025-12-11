// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXkFt4WXekIDdy14HyJypmz6KwYHjYo1E",
  authDomain: "hbsdentalclinic.firebaseapp.com",
  projectId: "hbsdentalclinic",
  storageBucket: "hbsdentalclinic.firebasestorage.app",
  messagingSenderId: "677231131419",
  appId: "1:677231131419:web:1ca2178d66554ba56a71be",
  measurementId: "G-BG9G1QNRWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics should only run in browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
