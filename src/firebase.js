// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyC7M_XJJCd6S10tMWUnHh0EDLrVejxsvIU",
  authDomain: "travelsandtourism-52e65.firebaseapp.com",
  projectId: "travelsandtourism-52e65",
  storageBucket: "travelsandtourism-52e65.appspot.com",
  messagingSenderId: "90602342057",
  appId: "1:90602342057:web:98edfa653c73482d5e4bb8",
  measurementId: "G-49YRREJZBS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default {app}
export { auth, db };

