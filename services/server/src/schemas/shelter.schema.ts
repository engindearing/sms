import { z } from "zod";

export const shelterSchema = z
  .object({
    _id: z.string(),

    organization: z.string(),

    beds: z.number(),

    name: z.string(),

    address: z.string(),

    image: z.string(),

    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .deepPartial();

export const getSheltersResponse = z.array(shelterSchema);

export const bedsAvailableResponse = z.object({
  totalBeds: z.number().max(50),
  bedsAvailable: z.number().min(0).max(50),
});
