// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp_EFhU8B443N7EcjWnqWJ2fZj5O10_S4",
  authDomain: "level-up-teco-coderpizza.firebaseapp.com",
  projectId: "level-up-teco-coderpizza",
  storageBucket: "level-up-teco-coderpizza.appspot.com",
  messagingSenderId: "328781356259",
  appId: "1:328781356259:web:4a37f8e1366c3fd38039d6",
  measurementId: "G-NZ5PV304EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);