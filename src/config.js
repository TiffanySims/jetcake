import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDCDraSVe1EZ1Eyiho9wzpWOzHT7h0yEfM",
  authDomain: "jetcake-acf6e.firebaseapp.com",
  databaseURL: "https://jetcake-acf6e.firebaseio.com",
  projectId: "jetcake-acf6e",
  storageBucket: "jetcake-acf6e.appspot.com",
  messagingSenderId: "207564785781",
  appId: "1:207564785781:web:7d612c76e07d191cbc503c",
  measurementId: "G-72HF6E8G3V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
