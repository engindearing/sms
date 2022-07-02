import mongoose, { Model, Schema, model } from "mongoose";

import { IReservationDocument } from "./interfaces/IReservationDocument";

interface IReservation extends IReservationDocument {
  // Define any methods inside here
}

interface IReservationModel extends Model<IReservation> {
  findUserByEmailOrCreate(email: string): object;
}

const reservationSchema: Schema = new mongoose.Schema(
  {
    household: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Household",
      required: true,
    },

    shelter: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Shelter",
      required: true,
    },

    members: [
      { type: mongoose.SchemaTypes.ObjectId, ref: "Member", required: true },
    ],

    beds: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

export const Reservation: IReservationModel = model<
  IReservation,
  IReservationModel
>("Reservation", reservationSchema);