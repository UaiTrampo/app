// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDVAM3mJqleaDixwmjqC-LWs2DOjOIGfMY",
    authDomain: "uaitrampo-14814.firebaseapp.com",
    projectId: "uaitrampo-14814",
    storageBucket: "uaitrampo-14814.appspot.com",
    messagingSenderId: "332649654619",
    appId: "1:332649654619:web:a3b55fba562918f41c527e"
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app)
export {db}