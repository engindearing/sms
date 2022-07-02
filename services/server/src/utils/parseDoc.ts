import mongoose from "mongoose";

export const parseDoc = (doc: mongoose.Document | null) =>
  JSON.parse(JSON.stringify(doc));
