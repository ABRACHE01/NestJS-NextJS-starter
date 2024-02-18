// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth}  from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJOk_NSRcmyZo6lhXX9st22-kxGdcKW3g",
  authDomain: "farmatracker.firebaseapp.com",
  projectId: "farmatracker",
  storageBucket: "farmatracker.appspot.com",
  messagingSenderId: "647107246040",
  appId: "1:647107246040:web:fbc5e8993b905ae69364ad",
  measurementId: "G-50ZPYY6G12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app)
const auth = getAuth(app)

 export  {app,db,auth};



 