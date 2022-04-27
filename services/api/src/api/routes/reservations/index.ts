const express = require("express");

const router = express.Router();

const { updateReservation } = require("./controller");

const { authRequired } = require("../../middleware/authRequired");

router.route("/:id").all(authRequired).put(updateReservation);

export default router;
