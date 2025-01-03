// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ASwU_DMlo9cEfSeVujuQJChhsTpj_iU",
  authDomain: "hekto-bd.firebaseapp.com",
  projectId: "hekto-bd",
  storageBucket: "hekto-bd.firebasestorage.app",
  messagingSenderId: "298676431563",
  appId: "1:298676431563:web:8e17b8bcd739ade213c94e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;