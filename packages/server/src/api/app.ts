import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import appRouter from "./trpc/appRouter";

const path = require("path");

const express = require("express");

const app = express();

const helmet = require("helmet");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const dotenv = require("dotenv");

const morgan = require("morgan");

dotenv.config();

app.use(express.static("web-build"));

app.use(helmet());

app.use(morgan("tiny"));

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// ###[  Routers ]###
import indexRouter from "./routes/index/index";
import usersRouter from "./routes/users";
import orgsRouter from "./routes/orgs";
import sheltersRouter from "./routes/shelters";
import reservationsRouter from "./routes/reservations";
import householdRouter from "./routes/household";
import memberRouter from "./routes/members";
import { authRequired } from "./middleware/authRequired";
import { createContext } from "./trpc/context";

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/orgs", orgsRouter);
app.use("/api/shelters", sheltersRouter);
app.use("/api/reservations", reservationsRouter);
app.use("/api/households", householdRouter);
app.use("/api/members", memberRouter);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

export type AppRouter = typeof appRouter;

export default app;
