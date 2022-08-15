// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlYonK6qdF28yzbT2e_lkAWBUOqe5wm6Q",
  authDomain: "netflix-clone-bff70.firebaseapp.com",
  projectId: "netflix-clone-bff70",
  storageBucket: "netflix-clone-bff70.appspot.com",
  messagingSenderId: "315734414212",
  appId: "1:315734414212:web:a6bd58430f8e0f4b78c3d1",
  measurementId: "G-7WTE1WZ3K3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

