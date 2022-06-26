import { Shelter } from "../models/shelter.model";

export const getAllShelters = async () => {
  return await Shelter.find();
};

const ShelterResolver = {
  getAllShelters,
};

export default ShelterResolver;
