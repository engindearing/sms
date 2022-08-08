import { z } from "zod";

import { generateSchema, extendApi } from "@anatine/zod-openapi";
import { householdSchema } from "./household.schema";
import { guestSchema } from "./guest.schema";

export const userSchema = extendApi(
  z
    .object({
      _id: z.string(),
      organization: z.string(),
      household: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      role: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
    .deepPartial()
);

export const getCurrentUserHouseholdResponse = z.object({
  household: householdSchema,
  guests: z.array(guestSchema),
});
