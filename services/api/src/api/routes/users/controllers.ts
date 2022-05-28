import { User } from "../../../models/User";

import { Household } from "../../../models/Household";
import { Member } from "../../../models/Member";

export const getCurrentUser = (req: any, res: any) => {
  const user = req.user;


  res.status(200).json({ user });
};


export const getOrCreateIntakeData = async (req: any, res: any) => {
  try {
    let householdData = await Household.findOne({user: req.user._id})

    if(!householdData) {
      
     householdData = await Household.create({user: req.user._id})
    }

    let householdHoldMembers = await Member.find({ household: householdData._id })

    res.status(200).json({ 
      ...householdData.toObject(),
      members: householdHoldMembers,
     })
    
  } catch (error) {
    res.status(400).json(error)

    
  }
}