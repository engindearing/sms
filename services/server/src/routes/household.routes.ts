import express from "express";

const router = express.Router();

import {
  updateHousehold,
  addMember,
  deleteMember,
  updateMembers,
} from "../controllers/household.controller";

import { authRequired } from "../middleware/authRequired";

router.route("/:id").all(authRequired).patch(updateHousehold);

router
  .route("/:id/members")
  .all(authRequired)
  .post(addMember)
  .patch(updateMembers);

router.route("/:id/members/:memberId").all(authRequired).delete(deleteMember);

export default router;
