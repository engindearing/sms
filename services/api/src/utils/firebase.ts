import admin from "firebase-admin";

import * as config from "./config.json";

console.log(config);

const firebase = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: config.project_id, // I get no error here
    clientEmail: config.client_email, // I get no error here
    privateKey: config.private_key.replace(/\\n/g, "\n"), // NOW THIS WORKS!!!
  }),
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
