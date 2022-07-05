require("dotenv").config();

const path = require("path");

const express = require("express");

const app = express();

const helmet = require("helmet");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const dotenv = require("dotenv");

const morgan = require("morgan");

// app.use((re: any, res: any, next: any) => {
//   setTimeout(() => {
//     next();
//   }, 5000);
// });

app.use(express.static("web-build"));

app.use(helmet());

app.use(morgan("tiny"));

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static("./web-build")); // serve static files (css & js) from the 'public' directory

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// ###[  Routers ]###
import indexRouter from "./routes/index.routes";
import usersRouter from "./routes/user.routes";
import sheltersRouter from "./routes/shelter.routes";
import householdRouter from "./routes/household.routes";

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/shelters", sheltersRouter);
app.use("/api/households", householdRouter);

export default app;
