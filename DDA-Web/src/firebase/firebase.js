import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAiF6n4mwxGfzVdl4EO6zczUaKLX5lZkx8",
  authDomain: "dda-sms.firebaseapp.com",
  projectId: "dda-sms",
  storageBucket: "dda-sms.firebasestorage.app",
  messagingSenderId: "1013167638977",
  appId: "1:1013167638977:web:ece7aa24a17f98fc890740",
  measurementId: "G-76RGDZZ6M2"
};
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
