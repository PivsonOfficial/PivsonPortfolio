// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDV64Et_a67eDW3rTZwzxbjMpyMhLe3KyQ",
    authDomain: "react-portfolio-pivson.firebaseapp.com",
    projectId: "react-portfolio-pivson",
    storageBucket: "react-portfolio-pivson.appspot.com",
    messagingSenderId: "678380398965",
    appId: "1:678380398965:web:d270d5660b7027decacb3c",
    measurementId: "G-JLC4HYB54R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);