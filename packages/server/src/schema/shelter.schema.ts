import { z } from "zod";

export const createShelterSchema = z.object({
  organization: z.string(),

  beds: z.number(),

  name: z.string(),

  address: z.string(),

  image: z.string(),
});

export type CreateShelterInput = z.TypeOf<typeof createShelterSchema>;

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
