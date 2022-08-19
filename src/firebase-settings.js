import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {  getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBU-XVfdaSQDY_TEn-lr7aRrcwLfi9l6xU",
  authDomain: "helvic-gleams.firebaseapp.com",
  projectId: "helvic-gleams",
  storageBucket: "helvic-gleams.appspot.com",
  messagingSenderId: "694140323109",
  appId: "1:694140323109:web:f356861a19d53fdcb346cc",
  measurementId: "G-04W1TVV423"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };