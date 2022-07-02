import express from "express";

import { authRequired } from "../middleware/authRequired";

import {
  createOrg,
  getAllOrgs,
  createShelter,
} from "../controllers/organization.controller";

const router = express.Router();

router.use(authRequired);

router.route("/").post(createOrg).get(getAllOrgs);

router.route("/:id/shelters").post(createShelter);

export default router;
