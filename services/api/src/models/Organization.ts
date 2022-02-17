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
  createdAt: {
    type: Date,
    default: Date.now()
  }

});


export const Organization: IOrganizationModel = model<IOrganization, IOrganizationModel>("Organization", organizationSchema);
