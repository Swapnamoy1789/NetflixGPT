// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "netflixgpt-608c4.firebaseapp.com",
  projectId: "netflixgpt-608c4",
  storageBucket: "netflixgpt-608c4.appspot.com",
  messagingSenderId: "1063807418850",
  appId: "1:1063807418850:web:01f215a3c1b7bc19e4f9bb",
  measurementId: "G-Y8VBGE18KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
