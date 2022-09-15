import express from "express";

import { verifyHouseholdExists } from "../middleware/verifyHouseholdId";

import {
  updateHousehold,
  addGuest,
  updateGuests,
  deleteGuestFromHousehold,
} from "../controllers/household.controller";

import { authRequired } from "../middleware/authRequired";
import { verifyGuestExists } from "../middleware/verifyGuestExists";
import { verifyGuestBelongsToHousehold } from "../middleware/verifyGuestBelongsToHousehold";

const router = express.Router();

router.use(authRequired);
/**
 * @openapi
 * '/api/households/{householdId}':
 *  patch:
 *     tags:
 *     - Households
 *     summary: Updates a single household by the householdId
 *     parameters:
 *      - name: householdId
 *        in: path
 *        description: The id of the household
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateHouseholdInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Household'
 *       404:
 *         description: Household not found
 *       401:
 *         description: Unauthorized
 */
router.route("/:householdId").patch(verifyHouseholdExists, updateHousehold);
/**
 * @openapi
 * '/api/households/{householdId}/guests':
 *  post:
 *     tags:
 *     - Households
 *     summary: Creates a new guest for a household
 *     parameters:
 *      - name: householdId
 *        in: path
 *        description: The id of the household
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateGuestInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Guest'
 *       404:
 *         description: Household not found
 *       401:
 *         description: Unauthorized
 */
router.route("/:householdId/guests").post(verifyHouseholdExists, addGuest);
/**
 * @openapi
 * '/api/households/{householdId}/guests':
 *  patch:
 *     tags:
 *     - Households
 *     summary: Bulk updates a list of guests for a household
 *     parameters:
 *      - name: householdId
 *        in: path
 *        description: The id of the household
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BulkUpdateGuestsInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/BulkUpdateGuestsInput'
 *       404:
 *         description: Household not found
 *       401:
 *         description: Unauthorized
 */

router.route("/:householdId/guests").patch(verifyHouseholdExists, updateGuests);
/**
 * @openapi
 * '/api/households/{householdId}/guests/{guestId}':
 *  delete:
 *     tags:
 *     - Households
 *     summary: Deletes a guest from a single household
 *     parameters:
 *      - name: householdId
 *        in: path
 *        description: The id of a household
 *        required: true
 *      - name: guestId
 *        in: path
 *        description: The id of a guest
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Guest does not belong to the household
 *       404:
 *         description: Household or guest not found
 *       401:
 *         description: Unauthorized
 */
router
  .route("/:householdId/guests/:guestId")
  .delete(
    verifyHouseholdExists,
    verifyGuestExists,
    verifyGuestBelongsToHousehold,
    deleteGuestFromHousehold
  );

export default router;

