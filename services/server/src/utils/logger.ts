import logger from "pino";

const log = logger({
  base: {
    pid: false,
    hostname: false,
  },
  transport: {
    target: "pino-pretty",
  },

  timestamp: false,
});

export default log;
