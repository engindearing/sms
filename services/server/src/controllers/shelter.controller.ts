import { Reservation } from "../models/reservation.model";
import { Shelter } from "../models/shelter.model";
import ObjectId from "../utils/ObjectID";

export const getAllShelters = async (req: any, res: any) => {
  try {
    let shelters = await Shelter.find();
    res.status(200).json(shelters);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createReservation = async (req: any, res: any) => {
  try {
    let newReservation = await Reservation.create(req.body);

    res.status(200).json(newReservation);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getTotalBedsAvailable = async (req: any, res: any) => {
  const { shelterId } = req.params;

  try {
    const bedsReservedQuery = await Reservation.aggregate([
      { $match: { shelter: ObjectId(shelterId) } },
      {
        $group: {
          _id: null,
          sum: { $sum: "$beds" },
        },
      },
    ]);

    const bedsReserved = bedsReservedQuery[0]?.sum || 0;

    const shelter = await Shelter.findById(shelterId).select({ beds: 1 });

    res.status(200).json({ bedsReserved, totalBeds: shelter!.beds });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
