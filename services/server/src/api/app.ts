const express = require("express");

const app = express();

const helmet = require('helmet')

const logger = require('morgan')

const cookieParser = require('cookie-parser');

const cors = require('cors')

const dotenv = require('dotenv')

const config_result = dotenv.config();
if (process.env.NODE_ENV != 'production' && config_result.error) {
  throw config_result.error;
}

app.use(helmet());

app.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser())

// ###[  Routers ]###

export default app
