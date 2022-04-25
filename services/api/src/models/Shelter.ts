import mongoose, { Model, Schema, model } from "mongoose";

import { IShelterDocument } from "./interfaces/IShelterDocument";

interface IShelter extends IShelterDocument {
  // Define any methods inside here
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

    name: {
      type: String,
      required: true,
      unique: true,
    },

    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },

    image: {
      required: [true, "organization is required"],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
  },
  { timestamps: true }
);

export const Shelter: IShelterModel = model<IShelter, IShelterModel>(
  "Shelter",
  shelterSchema
);
