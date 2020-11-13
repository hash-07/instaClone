// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {};

import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyAqiWaF_qVdmt6Tk-Y-vQqzMyvcO9zl5B0",
 authDomain: "hash-instagram-clone.firebaseapp.com",
 databaseURL: "https://hash-instagram-clone.firebaseio.com",
 projectId: "hash-instagram-clone",
 storageBucket: "hash-instagram-clone.appspot.com",
 messagingSenderId: "217656263863",
 appId: "1:217656263863:web:738ccce6d8f091fe3c3932",
 measurementId: "G-ZGCZBW87LY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
