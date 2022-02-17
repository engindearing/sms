import { restrictTo } from "src/api/middleware/restrictTo";

const express = require("express");

const router = express.Router();

const { createShelter } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/").all(authRequired, restrictTo('admin', 'orgAdmin')).post(createShelter);

export default router;
