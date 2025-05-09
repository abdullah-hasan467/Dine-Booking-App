// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdGH5AC_BcqfAhBceyuiVFDqZB7DXM1Bs",
  authDomain: "dineapp-2c14b.firebaseapp.com",
  projectId: "dineapp-2c14b",
  storageBucket: "dineapp-2c14b.firebasestorage.app",
  messagingSenderId: "150110044080",
  appId: "1:150110044080:web:01e0d8a94402360a17a075",
  measurementId: "G-B22NT622HC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
