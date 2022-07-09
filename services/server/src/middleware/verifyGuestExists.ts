import { Request, Response, NextFunction } from "express";

import { Guest } from "../models/guest.model";

export const verifyGuestExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    let guest = await Guest.findById(req.params.guestId);

    if (!guest) {
      res.status(404).json({
        message: `Guest with id of ${req.params.guestId} does not exist`,
      });

      return;
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
