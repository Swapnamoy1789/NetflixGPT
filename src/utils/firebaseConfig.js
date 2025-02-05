// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Ww1UssC21PyvpsYsH5_yFO4jRJw7bLY",
  authDomain: "netflixgpt-6287c.firebaseapp.com",
  projectId: "netflixgpt-6287c",
  storageBucket: "netflixgpt-6287c.firebasestorage.app",
  messagingSenderId: "1013464476280",
  appId: "1:1013464476280:web:297c70ea2583b463199b8d",
  measurementId: "G-8F5YTLBEP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
