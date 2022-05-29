const express = require("express");

const router = express.Router();

const { updateHousehold, addMembers, deleteMembers } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/:id").all(authRequired).patch(updateHousehold);

router.route("/:id/members").all(authRequired).post(addMembers);

router.route("/:id/members/delete").all(authRequired).post(deleteMembers);

export default router;
