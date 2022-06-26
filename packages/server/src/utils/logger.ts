import logger from "pino";

import dayjs from "dayjs";

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
