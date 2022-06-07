import { Document } from "mongoose";

export interface IFamilyDocument extends Document {
  _id: string,
  user: string,
  members: string
}
