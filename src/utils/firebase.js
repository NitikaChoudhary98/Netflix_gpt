// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAyZAb_oClRvCFCZ-OkelFTVrQBHml72c",
  authDomain: "netflixgpt-a8ef1.firebaseapp.com",
  projectId: "netflixgpt-a8ef1",
  storageBucket: "netflixgpt-a8ef1.appspot.com",
  messagingSenderId: "469279186621",
  appId: "1:469279186621:web:fa6a23c984a7c99587e1d4",
  measurementId: "G-83RM475D6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
