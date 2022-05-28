import { Household } from "../../../models/Household";

import { Member } from "../../../models/Member";

export const updateHousehold = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    let updatedHousehold = await Household.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedHousehold);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
};

export const addMembers = async (req: any, res: any) => {
  const { id } = req.params;

  let membersData = req.body.map((mem: any) => ({ ...mem, household: id }));

  try {
    let members = await Member.create(membersData);

    res.json(members);
  } catch (error) {
    res.json(error);
  }
};

export const deleteMembers = async (req: any, res: any) => {
  const { id } = req.params;

  let memberIds = req.body;

  try {
    memberIds.map(async (id: string) => await Member.findByIdAndDelete(id));

    res.status(204);
  } catch (error) {
    res.json(error);
  }
};
