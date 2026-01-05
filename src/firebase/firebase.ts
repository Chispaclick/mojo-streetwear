import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCCQ1G1vM87NUWRBRRNL9o5SLSzJFo7WIA",
    authDomain: "mojo-shop-3a425.firebaseapp.com",
    projectId: "mojo-shop-3a425",
    storageBucket: "mojo-shop-3a425.appspot.com",
    messagingSenderId: "517693192512",
    appId: "1:517693192512:web:07f9978166851cc54b22a5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // 🔥 añadir esto

console.log("API KEY:", import.meta.env.VITE_FIREBASE_API_KEY);
console.log("AUTH DOMAIN:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);