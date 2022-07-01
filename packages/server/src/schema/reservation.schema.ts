import { z } from "zod";

import { CreateMemberInput } from "./member.schema";

export const createReservationSchema = z.object({
  household: z.string(),

  shelter: z.string(),

  members: z.array(z.string()),

  beds: z.number().max(50),
});

export type CreateReservationInput = z.TypeOf<typeof createReservationSchema>;
