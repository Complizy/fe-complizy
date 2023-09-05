// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

//import { getAnalytics } from "firebase/analytics"
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Ny-P65WKUnIgAgGb0rc9nxulQ7NfboI",
  authDomain: "complizy-af731.firebaseapp.com",
  projectId: "complizy-af731",
  storageBucket: "complizy-af731.appspot.com",
  messagingSenderId: "257379853907",
  appId: "1:257379853907:web:7ffcca44dd94763da7c8a6",
  measurementId: "G-GMFZ011PT9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
