import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  role: {
    type: String,
    enum: ["pending", "guest", "staff", "manager", "admin"],
    default: "pending",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
