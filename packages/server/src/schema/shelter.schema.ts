import { z } from "zod";

export const shelterSchema = z
  .object({
    _id: z.string(),

    organization: z.string(),

    beds: z.number(),

    name: z.string(),

    address: z.string(),

    image: z.string(),
  })
  .deepPartial();
