// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { axiosWithAuth } from "./auth/axiosWithAuth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKbrE7JC4Vr_F0jeygNM8TTY73dlhUZv0",
  authDomain: "authsms-b4af9.firebaseapp.com",
  databaseURL: "https://authsms-b4af9-default-rtdb.firebaseio.com",
  projectId: "authsms-b4af9",
  storageBucket: "authsms-b4af9.appspot.com",
  messagingSenderId: "336516402007",
  appId: "1:336516402007:web:4f4f5d4b3c5826af728c12",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
