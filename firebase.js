// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-_-Ih-CsBcPwZsyheS_X0bFMUO7s1ryE",
  authDomain: "pantry-tracker-700f3.firebaseapp.com",
  projectId: "pantry-tracker-700f3",
  storageBucket: "pantry-tracker-700f3.appspot.com",
  messagingSenderId: "791799074135",
  appId: "1:791799074135:web:99920880f356f328798212",
  measurementId: "G-TCM6QHZV5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const analytics = getAnalytics(app);
export {app, firebaseConfig, firestore};