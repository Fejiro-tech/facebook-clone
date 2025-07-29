// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-AVvriGr7g_lrI_URx54tPxTNMS-7-Ck",
    authDomain: "my-facebook-clone11.firebaseapp.com",
    projectId: "my-facebook-clone11",
    storageBucket: "my-facebook-clone11.firebasestorage.app",
    messagingSenderId: "897057171894",
    appId: "1:897057171894:web:f3013920dd2d4947a77917",
    measurementId: "G-YKWV20GML3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
