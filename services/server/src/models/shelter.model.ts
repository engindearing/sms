import mongoose, { Model, Schema, model } from "mongoose";

interface IShelter extends mongoose.Document {
  // Define any methods inside here

  beds: string;
}

interface IShelterModel extends Model<IShelter> {
  // Define any static methods here
}

const shelterSchema: Schema = new mongoose.Schema(
  {
    organization: {
      required: [true, "organization is required"],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },

    beds: {
      type: Number,
      required: true,
      default: 50,
    },

    name: {
      type: String,
      required: true,
      unique: true,
    },

    address: {
      type: String,
      required: true,
    },

    image: String,
  },
  { timestamps: true }
);

export const Shelter: IShelterModel = model<IShelter, IShelterModel>(
  "Shelter",
  shelterSchema
);
