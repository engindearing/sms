import mongoose, { Model, Schema, model } from "mongoose";

import { IUserDocument } from "./interfaces/IUserDocument";

interface IUser extends IUserDocument {
  // Define any methods inside here
}

interface IUserModel extends Model<IUser> {
  findUserByEmailOrCreate(email: string): object;
}

const userSchema: Schema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["pending", "guest", "staff", "manager", "admin"],
    default: "pending",
  },
});

userSchema.static("findUserByEmailOrCreate", async function (email: string) {
  try {
    let user = await this.findOne({ email });

    if (!user) {
      let newUser = await this.insertMany({ email });

      return newUser[0];
    }

    return user;
  } catch (error) {
    throw error;
  }
});

export const User: IUserModel = model<IUser, IUserModel>("User", userSchema);
