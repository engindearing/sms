import ShelterResolver from "../resolvers/shelter.resolver";
import { shelterSchema } from "../schema/shelter.schema";
import { createRouter } from "../utils/createRouter";

const shelters = createRouter().query("list", {
  resolve() {
    return ShelterResolver.getAllShelters();
  },
});

export default shelters;
