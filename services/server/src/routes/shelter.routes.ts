import express from "express";

import { restrictTo } from "../middleware/restrictTo";

const router = express.Router();

import {
  createShelter,
  createReservation,
  getAllShelters,
  getShelterById,
  getTotalBedsAvailable,
} from "../controllers/shelter.controller";

import { authRequired } from "../middleware/authRequired";

router.use(authRequired);

router.route("/").get(getAllShelters).post(createShelter);

router.route("/:shelterId").get(getShelterById);

router.route("/:shelterId/bedsAvailable").get(getTotalBedsAvailable);

router.route("/:id/reservations").post(createReservation);

export default router;
