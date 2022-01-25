import "reflect-metadata";

import app from "./api/app";

import http from "http";

import mongoose from "mongoose";

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const main = async () => {
  try {
    await mongoose
      .connect(String(process.env.MONGO_DB_URL))
      .then(() => {
        console.log("\n MongoDB Connected");
      })
      .catch((error) => {
        throw error;
      });

    server.listen(PORT, () => {
      console.log(`\n Server is running on port ${PORT}\n`);
    });
    
  } catch (error) {
    console.log("Failed to start server\n" + error);
  }

  server.timeout = 60 * 10 * 1000;
};

main();
