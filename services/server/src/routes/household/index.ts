const express = require("express");

const router = express.Router();

const {
  updateHousehold,
  addMember,
  deleteMember,
  updateMembers,
} = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/:id").all(authRequired).patch(updateHousehold);

router
  .route("/:id/members")
  .all(authRequired)
  .post(addMember)
  .patch(updateMembers);

router
  .route("/:id/members/:memberId")
  .all(authRequired)
  .delete(deleteMember);

export default router;
