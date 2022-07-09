require("dotenv").config();

import mongoose from "mongoose";
import { Organization } from "../models/organization.model";
import { Shelter } from "../models/shelter.model";
import { User } from "../models/user.model";

export const Seeds = async () => {
  await User.deleteMany({});

  await Organization.deleteMany({});

  await Shelter.deleteMany();

  await User.create(users);

  await Organization.create(organizations);

  let org = await Organization.findOne({ name: "Family Promise" });

  let shelterSeeds = shelters.map((shelter) => {
    shelter["organization"] = org!._id;

    return shelter;
  });

  await Shelter.create(shelterSeeds);
};

const organizations = [{ name: "Family Promise" }];

const shelters = [
  {
    organization: "",
    beds: 50,
    name: "Family Promise of Spokane",
    address: "904 East Mission",
  },

  {
    organization: "",
    beds: 50,
    name: "Family Promise of Clarkz County",
    address: "904 East Mission",
  },

  {
    organization: "",
    beds: 50,
    name: "Open Doors",
    address: "904 East Mission",
  },
];

const users = [
  {
    firstName: "admin",
    lastName: "user",
    email: "admin@gmail.com",
    role: "admin",
  },

  {
    firstName: "staff",
    lastName: "user",
    email: "staff@gmail.com",
    role: "staff",
  },

  {
    firstName: "guest",
    lastName: "user",
    email: "guest@gmail.com",
    role: "guest",
  },
];
