import admin from "firebase-admin";
const firebase = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env?.FIREBASE_PROJECT_ID,
    clientEmail: process.env?.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env?.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
  databaseURL: process.env?.FIREBASE_DATABASE_URL,
});

export const verifyIdToken = (token: string) => {
  return firebase
    .auth()
    .verifyIdToken(token)
    .then((res) => res)
    .catch((error) => {
      console.log(error);

      return false;
    });
};

export default firebase;
