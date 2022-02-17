import { Document } from "mongoose";

export interface IOrganizationDocument extends Document {
    name: String,
    shelters: Array<Object>
}
