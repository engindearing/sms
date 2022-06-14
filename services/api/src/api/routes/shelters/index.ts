import { restrictTo } from "../../middleware/restrictTo";

const express = require("express");

const router = express.Router();

const { createShelter, createReservation, getReservations } = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router
  .route("/")
  .all(authRequired, restrictTo("admin", "orgAdmin", 'guest'))
  .post(createShelter);

router
  .route("/:id/reservations")
  .all(authRequired, restrictTo("guest", "programManager"))
  .post(createReservation);

router
  .route("/:id/reservations")
  .all(authRequired, restrictTo("guest", "programManager"))
  .get(getReservations);

export default router;
