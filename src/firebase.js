// Firebase config - already provided by you
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGFYKYwbCnx1GmXg_IdzuUC4plJAeboLA",
  authDomain: "redoreurl.firebaseapp.com",
  projectId: "redoreurl",
  storageBucket: "redoreurl.firebasestorage.app",
  messagingSenderId: "86277876129",
  appId: "1:86277876129:web:edec3c03777318fb9503e0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, Timestamp };