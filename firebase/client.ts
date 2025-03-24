// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDhbfP9w1BhHF4ixkl3wTCAHqoON--2ChU",
//   authDomain: "prepwise-ac088.firebaseapp.com",
//   projectId: "prepwise-ac088",
//   storageBucket: "prepwise-ac088.firebasestorage.app",
//   messagingSenderId: "18085398872",
//   appId: "1:18085398872:web:33bf9dba2c491993e67d2d",
//   measurementId: "G-L981JV3RYK",
// };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDhbfP9w1BhHF4ixkl3wTCAHqoON--2ChU",
//   authDomain: "prepwise-ac088.firebaseapp.com",
//   projectId: "prepwise-ac088",
//   storageBucket: "prepwise-ac088.firebasestorage.app",
//   messagingSenderId: "18085398872",
//   appId: "1:18085398872:web:33bf9dba2c491993e67d2d",
//   measurementId: "G-L981JV3RYK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
