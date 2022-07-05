import mongoose, { Model, Schema, model } from "mongoose";

interface IUser extends mongoose.Document {
  // Define any methods inside here
  _id: string
}

interface IUserModel extends Model<IUser> {
  _id: string
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
    organization: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Organization",
      default: null,
    },
  },
  { timestamps: true }
);

userSchema.static("findUserByEmailOrCreate", async function (email: string) {
  try {
    let user = await this.findOne({ email }).populate({
      path: "organization",
      populate: [
        {
          path: "shelters",
          select: "name",
        },
      ],
    });

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
