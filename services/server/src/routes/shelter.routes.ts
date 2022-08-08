import express from "express";

import {
  createReservation,
  getAllShelters,
  getTotalBedsAvailable,
} from "../controllers/shelter.controller";

import { authRequired } from "../middleware/authRequired";

import { verifyShelterExists } from "../middleware/verifyShelterExists";

const router = express.Router();

router.use(authRequired);
/**
 * @openapi
 * '/api/shelters':
 *  get:
 *     tags:
 *     - Shelters
 *     summary: Returns a list of all shelters
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/GetSheltersResponse'
 *       401:
 *         description: Unauthorized
 */
router.route("/").get(getAllShelters);
/**
 * @openapi
 * '/api/shelters/{shelterId}/bedsAvailable':
 *  get:
 *     tags:
 *     - Shelters
 *     summary: Returns a count of the beds available for a single shelter
 *     parameters:
 *      - name: shelterId
 *        in: path
 *        description: The id of a shelter
 *        required: true
 *
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/BedsAvailableResponse'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: not found
 */

router
  .route("/:shelterId/bedsAvailable")
  .get(verifyShelterExists, getTotalBedsAvailable);
/**
 * @openapi
 * '/api/shelters/{shelterId}/reservations':
 *  post:
 *     tags:
 *     - Shelters
 *     summary: Creates a new reservation for a single shelter
 *     parameters:
 *      - name: shelterId
 *        in: path
 *        description: The id of the shelter
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateReservationInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Shelter not found
 *       401:
 *         description: Unauthorized
 */
router.route("/:shelterId/reservations").post(verifyShelterExists,createReservation);

export default router;
