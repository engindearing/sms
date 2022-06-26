import mongoose, { Model, Schema, model } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  organization: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserDocument extends IUser, mongoose.Document {}

export interface IUserModel extends Model<IUserDocument> {
  findUserByEmailOrCreate(email: string): Promise<IUserDocument>;
}

const userSchema: Schema = new mongoose.Schema(
  {
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
      enum: ["guest", "staff", "orgAdmin", "admin"],
      default: "guest",
    },

    organization: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Organization",
      default: null,
    },

    household: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Household",
      default: null,
    },
  },
  { timestamps: true }
);

userSchema.static("findUserByEmailOrCreate", async function (email: string) {
  let user = await this.findOne({ email });

  if (!user) {
    let newUser = await this.insertMany({ email });

    return newUser[0];
  }

  return user;
});

export const User = model<IUserDocument, IUserModel>("User", userSchema);
