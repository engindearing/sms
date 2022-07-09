import mongoose, { Model, Schema, model } from "mongoose";

interface IUser extends mongoose.Document {
  // Define any methods inside here
  _id: string;
  email: string;
}

interface IUserModel extends Model<IUser> {
  _id: string;
  findUserByEmailOrCreate(email: string): object;
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
  },
  { timestamps: true }
);

userSchema.static("findUserByEmailOrCreate", async function (email: string) {
  let user = await this.findOne({ email });

  if (!user) {
    let newUser = await this.insertMany({ email });

    return newUser[0] as IUser;
  }

  return user as IUser;
});

export const User: IUserModel = model<IUser, IUserModel>("User", userSchema);
