import { restrictTo } from "../../middleware/restrictTo";

import { createShelter, getAllShelters } from "./shelters/controllers";

import { validateOrgId } from "./middleware/validateOrgId";

const { authRequired } = require('../../middleware/authRequired')

const express = require("express");

const router = express.Router();

const { createOrg, getAllOrgs } = require("./controllers");

router.use(authRequired)

router.route("/").post(createOrg).get(getAllOrgs)

router.route("/:id/shelters").all(validateOrgId).post(restrictTo('admin', 'orgAdmin'),createShelter).get(getAllShelters)

export default router;