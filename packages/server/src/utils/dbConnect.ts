import mongoose from "mongoose";
import log from "./logger";

const dbConnect = () => {
  return mongoose
    .connect(String(process.env.MONGO_URI))
    .then(() => {
      log.info("🍃 MongoDB connected");
    })
    .catch((e) => {
      console.log(e);
      console.log("Unable to start mongoDB");
      process.exit(1);
    });
};

export default dbConnect;
