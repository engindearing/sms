import express from "express";

import {
    getAllReservations,
} from "../controllers/reservation.controller";

import { authRequired } from "../middleware/authRequired";

const router = express.Router();

router.use(authRequired);

router.route("/").get(getAllReservations);

export default router;