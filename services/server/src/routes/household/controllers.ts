import { Household } from "../../models/Household";

import { Member } from "../../models/Member";

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

export const addMember = async (req: any, res: any) => {
  const { id } = req.params;

  let memberData = req.body;

  memberData["household"] = id;

  try {
    let newMember = await Member.create(memberData);

    res.json(newMember);
  } catch (error) {
    res.json(error);
  }
};

export const deleteMember = async (req: any, res: any) => {
  let { memberId } = req.params;

  try {
    await Member.findByIdAndDelete(memberId);

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

    res.status(200).json({ message: "updated members" });
  } catch (error) {
    res.status(400).json(error);
  }
};
