import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string({
    required_error: "Email is required",
  }),
  role: z.string({
    required_error: "role is required",
  }),
  organization: z.string(),
  household: z.string(),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;

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