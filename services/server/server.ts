import "reflect-metadata";

import app from "./src/app";

import http from "http";

import mongodbConnection from "./src/utils/mongodbConnection";

import log from "./src/utils/logger";
import swaggerDocs from "./src/utils/swagger";

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, async () => {
  await mongodbConnection();
  swaggerDocs(app, PORT);
  log.info(`💻 Server is running at http://localhost:${PORT}/healthcheck`);
});

server.timeout = 60 * 10 * 1000;
