import { Request, Response, NextFunction } from "express";

import { Guest } from "../models/guest.model";
import { Household } from "../models/household.model";

export const verifyGuestBelongsToHousehold = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.guestId || !req.params.householdId) return next();

  try {
    let guest = await Guest.findById(req.params.guestId);
    let household = await Household.findById(req.params.householdId);

    if (guest?.household.toString() !== household?._id.toString()) {
      res.status(400).json({
        message: `Guest with id of ${req.params.guestId} does not belong to household with id of ${req.params.householdId}`,
      });

      return;
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
