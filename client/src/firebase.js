// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a9fa2.firebaseapp.com",
  projectId: "mern-estate-a9fa2",
  storageBucket: "mern-estate-a9fa2.appspot.com",
  messagingSenderId: "776062510052",
  appId: "1:776062510052:web:01a2070b669e4bcd9addf1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
