import ShelterResolver from "../resolvers/shelter.resolver";
import { createRouter } from "../utils/createRouter";

const shelters = createRouter().query("list", {
  resolve() {
    return ShelterResolver.getAllShelters();
  },
});

export default shelters;
