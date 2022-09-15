
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

app.use(express.static("web-build"));

app.use(
  express.static(path.join(__dirname, "../../docs/database", "schema.html"))
);

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
import indexRouter from "./routes/index.routes";
import usersRouter from "./routes/user.routes";
import sheltersRouter from "./routes/shelter.routes";
import householdRouter from "./routes/household.routes";
import reservationRoutes from "./routes/reservation.routes";

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/shelters", sheltersRouter);
app.use("/api/households", householdRouter);
app.use('/api/reservations', reservationRoutes)

app.get("/docs/database", (req: any, res: any) => {
  console.log(path.join(__dirname, "../../docs/database", "schema.html"))
  res.sendFile(path.join(__dirname, "../../docs/database", "schema.html"));
});

export default app;
