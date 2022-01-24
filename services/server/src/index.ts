import "reflect-metadata";

import app from "./api/app";

import http from "http";

import { createConnection } from "typeorm";

import admin from "firebase-admin";

const serviceAccount = require("./firebaseConfig");

const server = http.createServer(app);
const PORT = process.env.PORT || 1337;

createConnection()
  .then(async () => {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount.default),
      databaseURL: "https://authsms-b4af9-default-rtdb.firebaseio.com",
    });

    server.listen(PORT, () => {
      console.log(`\n Server running on port ${PORT}! 💥 \n`);
    });

    server.timeout = 60 * 10 * 1000;
  })
  .catch((error) => console.log(error));
