import { Document } from "mongoose";

export interface IFamilyDocument extends Document {
  user: string,
  members: string
}
