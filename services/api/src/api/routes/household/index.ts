
const express = require("express");

const router = express.Router();

const { updateHousehold, addMember } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/:id").all(authRequired).patch(updateHousehold);

router.route("/:id/members").all(authRequired).post(addMember);

export default router;
