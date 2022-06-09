import { restrictTo } from "../../middleware/restrictTo";

const express = require("express");

const router = express.Router();

const {
  createShelter,
  createReservation,
  getReservations,
  getAllShelters,
  getShelterById,
} = require("./controllers");

const { authRequired } = require("../../middleware/authRequired");

router.use(authRequired);

router.route("/").get(getAllShelters).post(createShelter);

router.route("/:shelterId").get(getShelterById);

router
  .route("/:id/reservations")
  .all(restrictTo("guest", "programManager"))
  .post(createReservation);

router
  .route("/:id/reservations")
  .all(restrictTo("guest", "programManager"))
  .get(getReservations);

export default router;
