import { z } from "zod";

export const reservationSchema = z
  .object({
    _id: z.string(),

    household: z.string(),

    shelter: z.string(),

    members: z.array(z.string()),

    beds: z.number().default(1),

    createdAt: z.date(),

    updatedAt: z.date(),
  })
  .deepPartial();

export const createReservationInput = reservationSchema.omit({
  _id: true,
  shelter: true,
  createdAt: true,
  updatedAt: true
})