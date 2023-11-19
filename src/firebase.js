// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFWhRp-946fu74_Oa3xpIWJyBjVeih48U",
  authDomain: "letseat-4d974.firebaseapp.com",
  projectId: "letseat-4d974",
  storageBucket: "letseat-4d974.appspot.com",
  messagingSenderId: "988496219893",
  appId: "1:988496219893:web:dd8018398ff29e13c67fbc",
  measurementId: "G-MYBQLXYFQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;