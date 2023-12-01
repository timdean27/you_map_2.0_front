// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMefAP1CNoVXnizCaaqJv187L7fKXZbK4",
  authDomain: "you-map-2.firebaseapp.com",
  projectId: "you-map-2",
  storageBucket: "you-map-2.appspot.com",
  messagingSenderId: "275079087778",
  appId: "1:275079087778:web:0fea7d97db3b176db2f9fb",
  measurementId: "G-12KX6TNNPM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const googleAuthProvider = new GoogleAuthProvider();  // Ensure this line is unchanged

export { app, auth, firestore, storage, googleAuthProvider };