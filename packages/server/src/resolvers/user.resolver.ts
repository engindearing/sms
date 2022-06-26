import { Member, IMember } from "../models/guest.model";
import { Household, IFamily } from "../models/household.model";
import { Context } from "../utils/createContext";

export const getCurrentUser = (ctx: Context) => {
  return ctx.user;
};

export const getCurrentUserHousehold = async (ctx: Context) => {
  let household;

  let userId = ctx?.user?._id;

  household = await Household.findOne({ user: userId });

  if (!household) {
    household = await Household.create({ user: userId });
  }

  let members = await Member.find({ household: household._id });

  return { household: household as IFamily, members: members as IMember };
};

const UserResolver = {
  getCurrentUser,
  getCurrentUserHousehold,
};

export default UserResolver;
