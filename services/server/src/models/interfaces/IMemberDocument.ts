import { Document } from "mongoose";

export interface IMemberDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
