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

    members: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Member" }],

    beds: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "verified", "denied"],
      default: "pending",
    },
  },

  { timestamps: true }
);

reservationSchema.static(
  "findUserByEmailOrCreate",
  async function (email: string) {
    try {
      let user = await this.findOne({ email }).populate({
        path: "organization",
        populate: [
          {
            path: "shelters",
            select: "name",
          },
        ],
      });

      if (!user) {
        let newUser = await this.insertMany({ email });

        return newUser[0];
      }

      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const Reservation: IReservationModel = model<
  IReservation,
  IReservationModel
>("Reservation", reservationSchema);
