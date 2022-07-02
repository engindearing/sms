import { Request, Response } from "express";

import { Household } from "../models/household.model";

import { Member } from "../models/member.model";

import { Reservation } from "../models/reservation.model";

export const getCurrentUser = async (req: Request, res: Response) => {
  res.status(200).json({ currentUser: req.user });
};

export const getCurrentHousehold = async (req: Request, res: Response) => {
  let household;

  try {
    household = await Household.findOne({ user: req.user._id });

    // User doesn't own a household, let's create one for them
    if (!household) {
      household = await Household.create({ user: req.user._id });
    }

    // Find all members that belong to their household
    let members = await Member.find({ household: household._id });

    res.status(200).json({ household, members });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getCurrentReservation = async (req: Request, res: Response) => {
  try {
    const household = await Household.findOne({ user: req.user._id });

    // Finds the last reservation created
    const reservation = await Reservation.findOne(
      { household: household?._id },
      {},
      { sort: { created_at: -1 } }
    );

    res.status(200).json({ reservation });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
