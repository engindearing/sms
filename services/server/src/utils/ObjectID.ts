import mongoose from "mongoose";

const ObjectId = (id: string) => new mongoose.Types.ObjectId(id);

export default ObjectId;
