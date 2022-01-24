const express = require("express");

const router = express.Router();

const { getCurrentUser } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/me").all(authRequired).get(getCurrentUser);

export default router;
