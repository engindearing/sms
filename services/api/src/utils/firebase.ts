import admin from "firebase-admin";

const serviceAccount = require("../config/firebaseConfig");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.default),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const verifyIdToken = (token: string) => {
  return firebase
    .auth()
    .verifyIdToken(token)
    .then((res) => res)
    .catch(() => false);
};

export default firebase;
