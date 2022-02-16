import mongoose, { Model, Schema, model } from "mongoose";

import { IOrganizationDocument } from "./interfaces/IOrganizationDocument";

interface IOrganization extends IOrganizationDocument {
  // Define any methods inside here
}

interface IOrganizationModel extends Model<IOrganization> {
  // Define any static methods here
}

const organizationSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
 
});


export const User: IOrganizationModel = model<IOrganization, IOrganizationModel>("User", organizationSchema);
