import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace with your actual Firebase config values
const firebaseConfig = {
    apiKey: "AIzaSyATy2A5RRByE1lxitenJHXcv9HeB_Yw9D0",
    authDomain: "recipe-finder-app-b17e6.firebaseapp.com",
    projectId: "recipe-finder-app-b17e6",
    storageBucket: "recipe-finder-app-b17e6.firebasestorage.app",
    messagingSenderId: "577808296833",
    appId: "1:577808296833:web:5a88f8b56cf61102335680",
    measurementId: "G-JC5VCH1F8E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);          // For authentication
export const db = getFirestore(app);       // For Firestore database
