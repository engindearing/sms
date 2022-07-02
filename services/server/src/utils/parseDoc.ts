import mongoose from "mongoose";

export const parseDoc = (doc: any) =>
  JSON.parse(JSON.stringify(doc));
