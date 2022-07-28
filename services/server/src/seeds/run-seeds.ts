require("dotenv").config();

import mongoose from "mongoose";
import { Seeds } from "./seeds";

const main = async () => {
  // @ts-ignore
  mongoose.connect(process.env.MONGO_URI);
  await Seeds();

  process.exit();
};

main();
