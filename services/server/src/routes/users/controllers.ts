import { Household } from "../../models/Household";

import { Member } from "../../models/Member";

import { Request, Response } from "express";
import { Reservation } from "../../models/Reservation";

export const getCurrentUser = async (req: any, res: any) => {
  console.log("called");
  let user = { ...req.user.toObject() };

  try {
    let household = await Household.findOne({ user: user._id });

    user["household"] = household;

    res.status(200).json({ currentUser: user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCurrentHousehold = async (req: any, res: any) => {
  let household;

  try {
    household = await Household.findOne({ user: req.user._id });

    if (!household) {
      household = await Household.create({ user: req.user._id });
    }

    // Find all members that belong to their household
    let members = await Member.find({ household: household._id });

    res.status(200).json({ household, members });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const getHouseholdByUserId = async (req: any, res: any) => {
  let { id } = req.params;

  let household;

  try {
    household = await Household.findOne({ user: id });

    if (!household) {
      household = await Household.create({ user: id });
    }

    // Find all members that belong to their household
    let members = await Member.find({ household: household._id });

    res.status(200).json({ household, members });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getReservations = (req: Request, res: Response) => {
  res.status(200).json("Hello");
};

export const createReservation = (req: Request, res: Response) => {
  res.status(200).json("Hello");
};

export const deleteReservation = (req: Request, res: Response) => {
  res.status(200).json("Hello");
};

export const updateReservation = (req: Request, res: Response) => {
  res.status(200).json("Hello");
};

export const getCurrentReservation = async (req: any, res: any) => {
  try {
    const household = await Household.findOne({ user: req.user._id });

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
