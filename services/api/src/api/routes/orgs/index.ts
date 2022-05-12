import { restrictTo } from "../../middleware/restrictTo";

import { createShelter } from "./shelters/controllers";

const { authRequired } = require('../../middleware/authRequired')

const express = require("express");

const router = express.Router();

const { createOrg, getAllOrgs } = require("./controllers");

router.use(authRequired)

router.route("/").post(createOrg).get(getAllOrgs)

router.route("/:id/shelters").post(restrictTo('admin', 'orgAdmin'),createShelter)

export default router;