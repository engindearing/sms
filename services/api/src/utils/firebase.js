"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIdToken = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require("../config/firebaseConfig");
const firebase = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount.default),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});
const verifyIdToken = (token) => {
    return firebase
        .auth()
        .verifyIdToken(token)
        .then((res) => res)
        .catch(() => false);
};
exports.verifyIdToken = verifyIdToken;
exports.default = firebase;
