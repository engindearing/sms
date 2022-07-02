import express from "express";

import { deleteGuest } from "../controllers/guest.controller";

import { authRequired } from "../middleware/authRequired";

const router = express.Router();

router.route("/:id").all(authRequired).delete(deleteGuest);

export default router;
