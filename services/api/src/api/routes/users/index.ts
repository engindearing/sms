
const express = require("express");

const router = express.Router();

const { getCurrentUser, getOrCreateIntakeData } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/me").all(authRequired).get(getCurrentUser);

router.route("/intake").all(authRequired).get(getOrCreateIntakeData)

export default router;
