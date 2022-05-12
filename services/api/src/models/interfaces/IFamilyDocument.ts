import { Document } from "mongoose";

export interface IFamilyDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
