import express from "express";

import { verifyHouseholdExists } from "../middleware/verifyHouseholdId";

const router = express.Router();

import {
  updateHousehold,
  addGuest,
  updateGuests,
} from "../controllers/household.controller";

import { authRequired } from "../middleware/authRequired";

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
 *     summary: Creates a new guest and adds it to the household
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
 *     summary: Bulk updates the guests of a household by householdId
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

export default router;
