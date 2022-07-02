import { Request, Response } from 'express'

import { Household } from "../models/household.model";

import { Guest } from "../models/guest.model";

export const updateHousehold = async (req: Request, res: Response) => {
  const { householdId } = req.params;

  try {
    let updatedHousehold = await Household.findByIdAndUpdate(
      householdId,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedHousehold);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const addGuest = async (req: Request, res: Response) => {
  const { householdId } = req.params;

  let guestData = req.body;

  guestData["household"] = householdId;

  try {
    let newGuest = await Guest.create(guestData);

    res.json(newGuest);
  } catch (error) {
    res.json(error);
  }
};

export const updateGuests = async (req: Request, res: Response) => {
  let members = req.body;
  try {
    members.forEach(
      async (mem: any) => await Guest.findByIdAndUpdate(mem._id, mem)
    );

    res.status(200).json({ message: "updated members" });
  } catch (error) {
    res.status(400).json(error);
  }
};
