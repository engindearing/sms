const express = require("express");

const router = express.Router();

const { createShelter } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/").all(authRequired).post(createShelter);

export default router;
