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
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },

    shelter: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Shelter",
      required: true,
    },

    beds: {
      type: Number,
      required: true,
    },

    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  { timestamps: true }
);



export const Reservation: IReservationModel = model<
  IReservation,
  IReservationModel
>("Reservation", reservationSchema);
