// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCrMinfv75frWo7iygolSmek8QZvojYbs",
  authDomain: "fir-tut-64297.firebaseapp.com",
  projectId: "fir-tut-64297",
  storageBucket: "fir-tut-64297.appspot.com",
  messagingSenderId: "324681805487",
  appId: "1:324681805487:web:3667924271ee9120296e5a",
  measurementId: "G-BWXEXYD36L",
  databaseURL:"https://fir-tut-64297-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);