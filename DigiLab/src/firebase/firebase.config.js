// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD8OPbs-zt7gjBP5IE7YZtH7eNR2hXVXs",
  authDomain: "digi-lab-b8967.firebaseapp.com",
  projectId: "digi-lab-b8967",
  storageBucket: "digi-lab-b8967.appspot.com",
  messagingSenderId: "684887457977",
  appId: "1:684887457977:web:67e98cf05550342421db68",
  measurementId: "G-1R2PSLRSH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
