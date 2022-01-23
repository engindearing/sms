



import * as firebase from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCKbrE7JC4Vr_F0jeygNM8TTY73dlhUZv0",

  authDomain: "authsms-b4af9.firebaseapp.com",

  databaseURL: "https://authsms-b4af9-default-rtdb.firebaseio.com",

  projectId: "authsms-b4af9",

  storageBucket: "authsms-b4af9.appspot.com",

  messagingSenderId: "336516402007",

  appId: "1:336516402007:web:4f4f5d4b3c5826af728c12",
};

initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

const auth = getAuth();

const handleSignUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Registered with:", user.email);
    })
    .catch((error) => { throw error });
};

const handleLogin = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;

      console.log("Logged in with:", user.email);
    })
    .catch((error) => {
      throw error;
    });
};

// Listen for authentication state to change.

export default { firebase,handleSignUp, handleLogin, onAuthStateChanged, auth, signOut };
