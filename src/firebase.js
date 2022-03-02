import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "asdasdasdasdasdadasd",
    authDomain: "instagram-clone-react-f8d3b.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-f8d3b.firebaseio.com",
    projectId: "instagram-clone-react-f8d3b",
    storageBucket: "instagram-clone-react-f8d3b.appspot.com",
    messagingSenderId: "asdasdadasd",
    appId: "asdasdqweqwe",
    measurementId: "asfacq"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
