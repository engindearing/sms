const express = require("express");

const app = express();

const helmet = require("helmet");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const dotenv = require("dotenv");

const morgan = require('morgan')

const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
  throw config_result.error;
}

app.use(helmet());

app.use(morgan('tiny'))

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
import orgsRouter from './routes/orgs'
import sheltersRouter from './routes/shelters'

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/orgs', orgsRouter)
app.use('/shelters', sheltersRouter)

export default app;
