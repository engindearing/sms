import mongoose, { Model, Schema, model } from "mongoose";

interface IReservation extends mongoose.Document {
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
      { type: mongoose.SchemaTypes.ObjectId, ref: "Member" },
    ],

    beds: {
      type: Number,
      required: true,
    },

      status: {
          type: String,
          enum : ['pending','verified', 'denied'],
          default: 'pending'
      },
  },



  { timestamps: true }
);

export const Reservation: IReservationModel = model<
  IReservation,
  IReservationModel
>("Reservation", reservationSchema);
