import { z } from "zod";
import { Shelter } from "../models/shelter.model";

import { shelterSchema } from "../schema/shelter.schema";

export const getAllShelters = async () => {
  return (await Shelter.find()) as z.infer<typeof shelterSchema>[];
};

const ShelterResolver = {
  getAllShelters,
};

export default ShelterResolver;
