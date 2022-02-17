const express = require("express");

const router = express.Router();

const { createOrg } = require("./controllers");



router.route("/").post(createOrg);

export default router;
