import express from "express";

import { updateMember } from "../controllers/member.controller";

import { authRequired } from "../middleware/authRequired";

const router = express.Router();

router.route("/:id").all(authRequired).patch(updateMember);

export default router;
