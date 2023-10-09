import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5ccRszH3U24VQ0tsexMMXGJRrPbi-gzU",
  authDomain: "worksat-e6abe.firebaseapp.com",
  projectId: "worksat-e6abe",
  storageBucket: "worksat-e6abe.appspot.com",
  messagingSenderId: "827889633714",
  appId: "1:827889633714:web:5e5fbd0b1e2e9e7d813cab",
  measurementId: "G-8VE9BDD2YS",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const img = getStorage(app)
