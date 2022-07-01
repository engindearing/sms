import { Member, IMember } from "../models/guest.model";
import { Household, IFamily } from "../models/household.model";
import { householdSchema } from "../schema/household.schema";
import { Context } from "../utils/createContext";
import { z } from "zod";
import { memberSchema } from "../schema/member.schema";

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

  return {
    household: household as z.infer<typeof householdSchema>,

    members: members as z.infer<typeof memberSchema>[],
  };
};

const UserResolver = {
  getCurrentUser,
  getCurrentUserHousehold,
};

export default UserResolver;
