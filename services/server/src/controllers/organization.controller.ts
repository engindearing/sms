import { Organization } from "../models/organization.model";

import { Shelter } from "../models/shelter.model";

export const createOrg = async (req: any, res: any) => {
  try {
    let newOrg = await Organization.create(req.body);

    res.status(200).json({
      org: newOrg,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getAllOrgs = async ({}, res: any) => {
  try {
    let organizations = await Organization.find({}).populate({
      path: "shelters",
    });

    res.status(200).json({ organizations });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createShelter = async (req: any, res: any) => {
  let { id } = req.params;

  try {
    req.body.organization = id;

    let newShelter = await Shelter.create(req.body);

    res.status(200).json({ shelter: newShelter });
  } catch (error) {
    res.status(400).json({ error });
  }
};
