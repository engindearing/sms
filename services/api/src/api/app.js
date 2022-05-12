"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const helmet = require("helmet");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
    throw config_result.error;
}
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors({
    origin: "*",
}));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// ###[  Routers ]###
const index_1 = __importDefault(require("./routes/index/index"));
const users_1 = __importDefault(require("./routes/users"));
const orgs_1 = __importDefault(require("./routes/orgs"));
const shelters_1 = __importDefault(require("./routes/shelters"));
const reservations_1 = __importDefault(require("./routes/reservations"));
app.use("/", index_1.default);
app.use("/users", users_1.default);
app.use("/orgs", orgs_1.default);
app.use("/shelters", shelters_1.default);
app.use("/reservations", reservations_1.default);
exports.default = app;
