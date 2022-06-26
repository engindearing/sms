import { z } from "zod";

import { CreateMemberInput } from "./member.schema";

export const createReservationSchema = z.object({
  household: z.string(),

  shelter: z.string(),

  members: z.array(z.string()),

  beds: z.number().max(50),
});

export type CreateReservationInput = z.TypeOf<typeof createReservationSchema>;

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        email:
 *          type: string
 *        household:
 *          type: string
 *        organization:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
