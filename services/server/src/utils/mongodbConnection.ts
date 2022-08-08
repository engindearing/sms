import mongoose from "mongoose";
import log from "./logger";

const mongodbConnection = () => {
  return mongoose
    .connect(String(process.env.MONGO_URI))
    .then(() => {
      log.info("🍃 MongoDB connected");
    })
    .catch((e) => {
      console.log(e);
      console.log("Unable to start MongoDB");
      process.exit(1);
    });
};

export default mongodbConnection;
