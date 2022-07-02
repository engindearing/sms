import express from "express";

const router = express.Router();

import {
  getCurrentUser,
  getCurrentHousehold,
  getCurrentReservation,
} from "../controllers/user.controller";

import { authRequired } from "../middleware/authRequired";

router.use(authRequired);

/**
 * @openapi
 * /api/users/me:
 *  get:
 *     tags:
 *     - Users
 *     description: Returns the currently logged in user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */
router.route("/me").get(getCurrentUser);
/**
 * @openapi
 * /api/users/me/household:
 *  get:
 *     tags:
 *     - Users
 *     description: Returns the household of the current user and all members that belong to it. It will create an empty household if the user doesn't have one
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Household'
 *       401:
 *         description: Unauthorized
 */
router.route("/me/household").get(getCurrentHousehold);
/**
 * @openapi
 * /api/users/me/reservation:
 *  get:
 *     tags:
 *     - Users
 *     description: Returns the latest reservation of current user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       401:
 *         description: Unauthorized
 */
router.route("/me/reservation").get(getCurrentReservation);

export default router;
