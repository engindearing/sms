import express from "express";

import {
    getAllReservations,
    updateReservation
} from "../controllers/reservation.controller";

import { authRequired } from "../middleware/authRequired";

const router = express.Router();

router.use(authRequired);

router.route("/").get(getAllReservations);

router.route("/:id").patch(updateReservation);

export default router;