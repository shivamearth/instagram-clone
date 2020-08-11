import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApzCmhqH485_EhkokT35n_OVK4ru9_zJk",
    authDomain: "instagram-clone-react-f8d3b.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-f8d3b.firebaseio.com",
    projectId: "instagram-clone-react-f8d3b",
    storageBucket: "instagram-clone-react-f8d3b.appspot.com",
    messagingSenderId: "465796105891",
    appId: "1:465796105891:web:2b5bf7251f0b3ac60de116",
    measurementId: "G-DVQ7E60637"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};