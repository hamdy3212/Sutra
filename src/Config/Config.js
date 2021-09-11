import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALweot1Te86L6eICzdpriyKMbzSqEf92k",
  authDomain: "sutra-12317.firebaseapp.com",
  databaseURL: "https://sutra-12317-default-rtdb.firebaseio.com",
  projectId: "sutra-12317",
  storageBucket: "sutra-12317.appspot.com",
  messagingSenderId: "917042705418",
  appId: "1:917042705418:web:0ddbc3e1a314b6464e5bf3",
  measurementId: "G-QXJ72SJKFP",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
