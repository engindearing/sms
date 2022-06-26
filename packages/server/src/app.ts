require("dotenv").config();

import express, { Request, Response } from "express";

import * as trpcExpress from "@trpc/server/adapters/express";

import appRouter from "./routers";

import { createContext } from "./utils/createContext";

import cors from "cors";

import logger from "morgan";
import Seeds from "./seeds/seeds";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(logger("dev"));

app.use("/healthcheck", (req: Request, res: Response) =>
  res.json({ api: "up" })
);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

export type AppRouter = typeof appRouter;

export default app;
