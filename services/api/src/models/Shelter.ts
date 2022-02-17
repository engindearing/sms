import mongoose, { Model, Schema, model } from "mongoose";

import { IShelterDocument } from "./interfaces/IShelterDocument";

interface IShelter extends IShelterDocument {
    // Define any methods inside here
}

interface IShelterModel extends Model<IShelter> {
    // Define any static methods here
}

const shelterSchema: Schema = new mongoose.Schema({
    orgId: { required: [true, 'orgId is required'], type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },

    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export const Shelter: IShelterModel = model<IShelter, IShelterModel>("Shelter", shelterSchema);