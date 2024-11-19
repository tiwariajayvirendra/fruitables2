// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByoo9_ca9mqExFzDPJat83IqDQ1NrO71E",
  authDomain: "ajaytiwari-d345b.firebaseapp.com",
  projectId: "ajaytiwari-d345b",
  storageBucket: "ajaytiwari-d345b.firebasestorage.app",
  messagingSenderId: "832007249306",
  appId: "1:832007249306:web:9090e89598c6027fb2ee23"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const storage = getStorage(app);
 export const auth=getAuth(app)