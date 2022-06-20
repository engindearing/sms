import { Reservation } from "../../../models/Reservation";

import { Request, Response } from "express";

exports.updateReservation = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      reservation: updatedReservation,
    });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

export const createReservation = async (req: Request, res: Response) => {
  try {
    const newReservation = await Reservation.create(req.body);

    res.status(200).json({ reservation: newReservation });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


export const deleteReservation = async (req: Request, res: Response) => {
  const { id: reservationId } = req.params;

  try {
    await Reservation.findByIdAndDelete(reservationId);

    res.status(200).json({ message: "Deleted reservation" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
