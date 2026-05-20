import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey:"AIzaSyBgGpDEc7RAjrdAHmRdcXOKUbn4nW6jGYc",
 authDomain:"assignarc-4d3f0.firebaseapp.com",
 projectId:"assignarc-4d3f0",
 storageBucket:"assignarc-4d3f0.firebasestorage.app",
 messagingSenderId:"152162678041",
 appId:"1:152162678041:web:f6bcc53b3a2ef2c0064188"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app;