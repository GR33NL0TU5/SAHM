import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBWEyocjrQCjoENYbkKIbVe_2D9bXPe8XA",
  authDomain: "sahm-5a4a0.firebaseapp.com",
  projectId: "sahm-5a4a0",
  storageBucket: "sahm-5a4a0.appspot.com",
  messagingSenderId: "1010829019707",
  appId: "1:1010829019707:web:fb166e26f7f3ac66972a1e",
  measurementId: "G-X27Q0GCH8X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};

