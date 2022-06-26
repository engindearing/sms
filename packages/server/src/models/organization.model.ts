import mongoose, { Model, Schema, model } from "mongoose";

import { IOrganizationDocument } from "./interfaces/IOrganizationDocument";

interface IOrganization extends IOrganizationDocument {
  // Define any methods inside here
}

interface IOrganizationModel extends Model<IOrganization> {
  // Define any static methods here
}

const organizationSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

organizationSchema.virtual("shelters", {
  ref: "Shelter", //The Model to use
  localField: "_id", //Find in Model, where localField
  foreignField: "organization", // is equal to foreignField
});

// Set Object and Json property to true. Default is set to false
organizationSchema.set("toObject", { virtuals: true });
organizationSchema.set("toJSON", { virtuals: true });

export const Organization: IOrganizationModel = model<
  IOrganization,
  IOrganizationModel
>("Organization", organizationSchema);
