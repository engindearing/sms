import { User } from "../../../models/User";

import { Household } from "../../../models/Household";
import { Member } from "../../../models/Member";

export const getCurrentUser = async (req: any, res: any) => {
  let user = { ...req.user.toObject() };

  try {
    let household = await Household.findOne({ user: user._id });

    user["household"] = household;

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrCreateIntakeData = async (req: any, res: any) => {
  try {
    let householdData = await Household.findOne({ user: req.user._id });

    if (!householdData) {
      householdData = await Household.create({ user: req.user._id });
    }

    let householdHoldMembers = await Member.find({
      household: householdData._id,
    });

    res.status(200).json({
      ...householdData.toObject(),
      members: householdHoldMembers,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
