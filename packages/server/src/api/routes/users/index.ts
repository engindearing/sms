import { app } from "firebase-admin";

const express = require("express");

const router = express.Router();

const {
  getCurrentUser,
  getCurrentHousehold,
  getHouseholdByUserId,
  getReservations,
  createReservation,
  updateReservation,
  deleteReservation,
  getCurrentReservation
} = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.use(authRequired);

router.route("/me").get(getCurrentUser);

router.route("/me/household").get(getCurrentHousehold);

router.route("/me/reservations/current").get(getCurrentReservation);

router.route("/me/reservations").get(getReservations).post(createReservation);

router
  .route("/me/reservations/:reservationId")
  .patch(updateReservation)
  .delete(deleteReservation);

router.route("/:id/household").get(getHouseholdByUserId);

export default router;
