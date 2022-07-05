import { Request, Response, NextFunction } from "express";

import { Household } from "../models/household.model";

export const verifyHouseholdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.householdId) return next();

  try {
    let household = await Household.findById(req.params.householdId);

    if (!household) {
      res.status(404).json({
        message: `Household with id of ${req.params.householdId} does not exist`,
      });

      return;
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
