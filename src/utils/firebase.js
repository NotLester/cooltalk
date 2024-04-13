// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from '@firebase/firestore'; // Corrected the import name here
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBOFsmSgxQyXcg7HiFFSKmCBN5q3Uqrj_E",
  authDomain: "cool-talk-ad55b.firebaseapp.com",
  projectId: "cool-talk-ad55b",
  storageBucket: "cool-talk-ad55b.appspot.com",
  messagingSenderId: "1044580735065",
  appId: "1:1044580735065:web:4ee16f5a2137715852f948",
  measurementId: "G-9S99CQYQJJ"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics =
  app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app); // Corrected the function name here
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
