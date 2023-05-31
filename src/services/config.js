import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCV83RnlI0Nd8sCy_tU3bevz1EWm_TK300",
  authDomain: "react-francohornos.firebaseapp.com",
  projectId: "react-francohornos",
  storageBucket: "react-francohornos.appspot.com",
  messagingSenderId: "156804941631",
  appId: "1:156804941631:web:72035402b09d4cddaeb58a"
};


  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app)