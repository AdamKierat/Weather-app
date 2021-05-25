import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4jvsNE_Fbzo8gaLBSTH-bxyHeDuocTVY",
    authDomain: "pogodynka-77854.firebaseapp.com",
    databaseURL: "https://pogodynka-77854-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pogodynka-77854",
    storageBucket: "pogodynka-77854.appspot.com",
    messagingSenderId: "69774890317",
    appId: "1:69774890317:web:21ecbe8a456c51bef59304"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };