const express = require("express");

const router = express.Router();

const {
  updateHousehold,
  addMembers,
  deleteMembers,
  updateMembers,
} = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/:id").all(authRequired).patch(updateHousehold);

router
  .route("/:id/members")
  .all(authRequired)
  .post(addMembers)
  .patch(updateMembers);

router.route("/:id/members/delete").all(authRequired).post(deleteMembers);

export default router;
