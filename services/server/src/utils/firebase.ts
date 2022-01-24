import admin from "firebase-admin";

const serviceAccount = require("../config/firebaseConfig");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.default),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export default firebase;
