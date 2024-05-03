// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZdmyBvn8F7Bwimniicmb7KWyhu8O18RI",
    authDomain: "vnature-web.firebaseapp.com",
    projectId: "vnature-web",
    storageBucket: "vnature-web.appspot.com",
    messagingSenderId: "1078882987602",
    appId: "1:1078882987602:web:d0e1e79c5baceade60f98b",
    measurementId: "G-CCSM32FTT8",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig, {
    experimentalForceLongPolling: true,
});
export const db = getFirestore(app);
export const storage = getStorage();

// Устанавливаем таймаут на 30 секунд
