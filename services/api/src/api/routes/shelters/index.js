"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restrictTo_1 = require("../../middleware/restrictTo");
const express = require("express");
const router = express.Router();
const { createShelter, createReservation, getReservations } = require("./controllers");
const { authRequired } = require("../../middleware/authRequired");
router
    .route("/")
    .all(authRequired, (0, restrictTo_1.restrictTo)("admin", "orgAdmin"))
    .post(createShelter);
router
    .route("/:id/reservations")
    .all(authRequired, (0, restrictTo_1.restrictTo)("guest", "programManager"))
    .post(createReservation);
router
    .route("/:id/reservations")
    .all(authRequired, (0, restrictTo_1.restrictTo)("guest", "programManager"))
    .get(getReservations);
exports.default = router;
