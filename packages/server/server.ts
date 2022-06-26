require("dotenv").config();

import "reflect-metadata";

import app from "./src/app";

import http from "http";

import swaggerDocs from "./src/utils/swagger";

import dbConnect from "./src/utils/dbConnect";

import log from "./src/utils/logger";

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, async () => {
  await dbConnect();
  log.info(`💻 Server is running at http://localhost:${PORT}/healthcheck`);
  await swaggerDocs(app, PORT);
});
