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
  let memberIds = req.body.map((mem: any) => mem._id);

  try {
    memberIds.forEach(async (id: any) => await Member.findByIdAndDelete(id));

    res.status(200).json({ message: "Deleted members" });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateMembers = async (req: any, res: any) => {
  let members = req.body;

  try {
    members.forEach(
      async (mem: any) => await Member.findByIdAndUpdate(mem._id, mem)
    );

    res.status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};
