const express = require("express");

const router = express.Router();

import {
  updateReservation,
  createReservation,
  deleteReservation,
} from "../controllers/reservation.controller";

import { authRequired } from "../middleware/authRequired";

router.use(authRequired);

router.route("/").post(createReservation);

router.route("/:id").put(updateReservation).delete(deleteReservation);

export default router;
