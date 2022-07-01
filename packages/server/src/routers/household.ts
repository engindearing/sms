import { createRouter } from "../utils/createRouter";

import HouseholdResolver from "../resolvers/household.resolver";

import {
  addMemberInput,
  updateHouseholdInput,
} from "../schema/household.schema";
import { Member } from "../models/guest.model";
import { Household } from "../models/household.model";
import { TRPCError } from "@trpc/server";

const households = createRouter()
  /**
   * @openapi
   * /trpc/households.update:
   *  post:
   *     tags:
   *       - Households
   *     summary: Updates a household
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
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Household'
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   */
  .mutation("update", {
    input: updateHouseholdInput,
    resolve({ input }) {
      return HouseholdResolver.update(input);
    },
  })
  /**
   * @openapi
   * /trpc/households.addMember:
   *  post:
   *     tags:
   *       - Households
   *     summary: Adds a new member to a household
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/AddMemberInput'
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Member'
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized
   */
  .mutation("addMember", {
    input: addMemberInput,
    async resolve({ input: { householdId, member } }) {
      let household = await Household.findById(householdId);

      if (!household)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Household with id of ${householdId} does not exist`,
        });

      let newMember = await Member.create({
        household: householdId,
        ...member,
      });

      return newMember;
    },
  });

export default households;
