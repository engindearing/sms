import { Household, IFamily } from "../models/household.model";
import {
  updateHouseholdInput,
  householdSchema,
} from "../schema/household.schema";

import { z } from "zod";

import { TRPCError } from "@trpc/server";

export const update = async (input: z.TypeOf<typeof updateHouseholdInput>) => {
  let { householdId, household } = input;

  let householdExists = await Household.findById(householdId);

  if (!householdExists) {
    throw new TRPCError({ code: "NOT_FOUND" });
  }

  let updatedHousehold = await Household.findByIdAndUpdate(
    householdId,
    household,
    { new: true }
  );

  return updatedHousehold as IFamily;
};

const HouseholdResolver = {
  update,
};

export default HouseholdResolver;
