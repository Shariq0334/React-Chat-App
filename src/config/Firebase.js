import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoCktZZ4TTsxGQkIyiPzhAfy6W3ptoar4",
  authDomain: "react-firebase-f5dd9.firebaseapp.com",
  projectId: "react-firebase-f5dd9",
  storageBucket: "react-firebase-f5dd9.appspot.com",
  messagingSenderId: "461533637267",
  appId: "1:461533637267:web:51a00a96f2ef31084c7b66"
  
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy
};