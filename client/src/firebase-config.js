// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import dotenv from "dotenv";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optiona l
const firebaseConfig = {
  apiKey: "AIzaSyCpfM2w3l-ZrL2uUR2YcD8XuhQRdy2MH8k",
  authDomain: "a-1c067.firebaseapp.com",
  projectId: "a-1c067",
  storageBucket: "a-1c067.appspot.com",
  messagingSenderId: "1040195901987",
  appId: "1:1040195901987:web:c86d5812a3be9c2ab62f96",
  measurementId: "G-0XJ32B51X8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
