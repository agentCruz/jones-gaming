import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBxQlSJa_59WOmcUwypPlOmyeRkBaCFqrM",
    authDomain: "paragone-associates.firebaseapp.com",
    projectId: "paragone-associates",
    storageBucket: "paragone-associates.appspot.com",
    messagingSenderId: "676417616645",
    appId: "1:676417616645:web:8f7e381978315e2afe556c",
    measurementId: "G-082WSYMGFT",
};


const apps = getApps();
const app = !apps.length ? initializeApp(firebaseConfig) : getApp();


export default app;
