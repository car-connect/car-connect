// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4T89vNJm5Mtk1pXwzoXDYcUHavLF7a9o",
  authDomain: "car-connect-356716.firebaseapp.com",
  projectId: "car-connect-356716",
  storageBucket: "car-connect-356716.appspot.com",
  messagingSenderId: "652311951950",
  appId: "1:652311951950:web:ea74108e5c7055cb27211f",
  measurementId: "G-62H0EWDJQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy