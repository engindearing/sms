import express from "express";

const router = express.Router();

import {
  updateHousehold,
  addMember,
  updateMembers,
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
router.route("/:id").patch(updateHousehold);
/**
 * @openapi
 * '/api/households/{householdId}/members':
 *  post:
 *     tags:
 *     - Households
 *     summary: Creates a new member for the household
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
 *             $ref: '#/components/schemas/CreateMemberInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Member'
 *       404:
 *         description: Household not found
 *       401:
 *         description: Unauthorized
 */
router.route("/:id/members").post(addMember);
/**
 * @openapi
 * '/api/households/{householdId}/members':
 *  patch:
 *     tags:
 *     - Households
 *     summary: Bulk updates members of a household by householdId
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
 *             $ref: '#/components/schemas/BulkUpdateMembersInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/BulkUpdateMembersInput'
 *       404:
 *         description: Household not found
 *       401:
 *         description: Unauthorized
 */
router.route("/:id/members").patch(updateMembers);

export default router;
