require("dotenv").config();

import mongoose from "mongoose";
import { Seeds } from "./seeds";

const main = async () => {
  // @ts-ignore
  await mongoose.connect('mongodb+srv://root:dev@cluster0.hauaxfp.mongodb.net/?retryWrites=true&w=majority');
  await Seeds();

  process.exit();
};

main();
