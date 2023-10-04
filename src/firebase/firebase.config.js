// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmuxxLDg5BQ3JQtKbhYdLYNuuvBVzTDc8",
  authDomain: "react-travel-guru-24d3c.firebaseapp.com",
  projectId: "react-travel-guru-24d3c",
  storageBucket: "react-travel-guru-24d3c.appspot.com",
  messagingSenderId: "930249526019",
  appId: "1:930249526019:web:35cc4be0c6d2a17dd93736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;