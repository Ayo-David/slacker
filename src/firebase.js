import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC0EkozlnJ257POa6Wcz0iH2tdENgvd4WU",
    authDomain: "slacker-46f35.firebaseapp.com",
    projectId: "slacker-46f35",
    storageBucket: "slacker-46f35.appspot.com",
    messagingSenderId: "216133715443",
    appId: "1:216133715443:web:523f19f3d0d22d9b13be86",
    measurementId: "G-MPQD13D408"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;