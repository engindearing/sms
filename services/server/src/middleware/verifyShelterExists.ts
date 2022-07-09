import { Request, Response, NextFunction } from "express";

import { Shelter } from "../models/shelter.model";

export const verifyShelterExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    let shelter = await Shelter.findById(req.params.shelterId);

    if (!shelter) {
      res.status(404).json({
        message: `shelter with id of ${req.params.shelterId} does not exist`,
      });

      return;
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
