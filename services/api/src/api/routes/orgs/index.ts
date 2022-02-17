const { authRequired } = require('../../middleware/authRequired')

const express = require("express");

const router = express.Router();

const { createOrg } = require("./controllers");

router.route("/").post(authRequired,createOrg);

export default router;