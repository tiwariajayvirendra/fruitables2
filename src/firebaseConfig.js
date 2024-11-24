// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI1QW2vGN6BippZ1XJNI2o3cHo6_GLp1Y",
  authDomain: "jay12-1b7eb.firebaseapp.com",
  projectId: "jay12-1b7eb",
  storageBucket: "jay12-1b7eb.firebasestorage.app",
  messagingSenderId: "955936504319",
  appId: "1:955936504319:web:2f2c2d7e0ce26410c48fca"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const storage = getStorage(app);
 export const auth=getAuth(app)