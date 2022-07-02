import { Organization } from "../models/organization.model";
import { Shelter } from "../models/shelter.model";
import { User } from "../models/user.model";

import { organizations } from "./organization-seeds";
import { shelters } from "./shelter-seeds";
import { users } from "./user-seeds";

const Seeds = async () => {
  await User.deleteMany({});

  await Organization.deleteMany({});

  await Shelter.deleteMany();

  await User.create(users);

  await Organization.create(organizations);

  let org = await Organization.findOne({ name: "Family Promise" });

  let shelterSeeds = shelters.map((shelter) => {
    shelter["organization"] = org?._id;

    return shelter;
  });

  await Shelter.create(shelterSeeds);
};

export default Seeds;
