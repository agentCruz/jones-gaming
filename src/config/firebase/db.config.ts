import { initializeFirestore } from "firebase/firestore";
import app from "./firebase.config";


//await firebaseAuth.setPersistence(browserLocalPersistence);

// export const db = getFirestore(app);
const db = initializeFirestore(app, {
   // experimentalForceLongPolling: true,
});

export default db;