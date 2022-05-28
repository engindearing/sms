const express = require("express");

const router = express.Router();

const { updateHousehold, addMembers } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/:id").all(authRequired).patch(updateHousehold);

router.route("/:id/members").all(authRequired).post(addMembers);

export default router;
