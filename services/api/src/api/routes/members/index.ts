
const express = require("express");

const router = express.Router();

const { updateMember } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/:id").all(authRequired).patch(updateMember);

export default router;
