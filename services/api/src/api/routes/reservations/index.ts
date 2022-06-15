const express = require("express");

const router = express.Router();

const { updateReservation, createReservation } = require("./controller");

const { authRequired } = require("../../middleware/authRequired");

router.use(authRequired);

router.route("/").post(createReservation);

router.route("/:id").put(updateReservation);

export default router;
