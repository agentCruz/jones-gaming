import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtjtpwl22PQceTqwo-VsOAZ2TT95fBQ6g",
  authDomain: "jones-gaming.firebaseapp.com",
  projectId: "jones-gaming",
  storageBucket: "jones-gaming.appspot.com",
  messagingSenderId: "170450542576",
  appId: "1:170450542576:web:5be65966e58376e7dc8735",
};

const apps = getApps();
const app = !apps.length ? initializeApp(firebaseConfig) : getApp();

export default app;
