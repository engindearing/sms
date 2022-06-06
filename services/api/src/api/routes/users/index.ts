const express = require("express");

const router = express.Router();

const {
  getCurrentUser,
  getOrCreateIntakeData,
  getHouseholdByUserId,
} = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.route("/me").all(authRequired).get(getCurrentUser);

router.route("/:id/household").all(authRequired).get(getHouseholdByUserId);

export default router;
