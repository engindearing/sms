const express = require("express");

const router = express.Router();

const {
  updateReservation,
  createReservation,
  deleteReservation,
} = require("./controller");

const { authRequired } = require("../../middleware/authRequired");

router.use(authRequired);

router.route("/").post(createReservation);

router.route("/:id").put(updateReservation).delete(deleteReservation);

export default router;
