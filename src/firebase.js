import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK-VpXF5HUJbiD9O7V2w8NedMr0zafi7Q",
  authDomain: "react-chat-ff62e.firebaseapp.com",
  projectId: "react-chat-ff62e",
  storageBucket: "react-chat-ff62e.appspot.com",
  messagingSenderId: "832333807122",
  appId: "1:832333807122:web:f4a89eb5f6fbd5264ae2cb",
  measurementId: "G-F4P7JJ9MNM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();