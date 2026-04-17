process.stdout.setDefaultEncoding("utf8");
process.stderr.setDefaultEncoding("utf8");

import pino from "pino";

const baseLogger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname"
    }
  }
});

export const getLogger = (module: string) => baseLogger.child({ module });