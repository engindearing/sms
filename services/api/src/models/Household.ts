import mongoose, { Model, Schema, model } from "mongoose";

import { IFamilyDocument } from "./interfaces/IFamilyDocument";

interface IFamily extends IFamilyDocument {
  // Define any methods inside here
}

interface IFamilyModel extends Model<IFamily> {
  // Define any static methods here
}

const householdSchema: Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
      default: null,
    },
    status: {
      type: String,
      enum: ["start", "completed"],
      default: "start",
    },

    percentComplete: {
      type: Number,
      default: 0,
    },
    contact: {
      phoneOne: {
        name: {
          type: String,
          default: null,
        },
        number: {
          type: String,
          default: null,
        },
        safeToLeaveMsg: {
          type: Boolean,
          default: null,
        },
      },
      phoneTwo: {
        name: {
          type: String,
          default: null,
        },
        number: {
          type: String,
          default: null,
        },
        safeToLeaveMsg: {
          type: Boolean,
          default: null,
        },
      },
      emergencyContact: {
        name: {
          type: String,
          default: null,
        },
        number: {
          type: String,
          default: null,
        },
      },
    },

    govBenefits: {
      RRH: {
        type: Boolean,
        default: null,
      },
      snap: {
        type: Boolean,
        default: null,
      },
      cpsFps: {
        type: Boolean,
        default: null,
      },
      foodstamps: {
        type: Boolean,
        default: null,
      },
      housingVoucher: {
        type: Boolean,
        default: null,
      },
      veteranServices: {
        type: Boolean,
        default: null,
      },
    },

    vehicle: {
      make: {
        type: String,
        default: null,
      },
      year: {
        type: String,
        default: null,
      },
      color: {
        type: String,
        default: null,
      },
      model: {
        type: String,
        default: null,
      },
      lic: {
        type: String,
        default: null,
      },
    },

    homeless: {
      lastPermanentAddress: {
        type: String,
        default: null,
      },

      priorLocation: {
        type: String,
        default: null,
      },
      currentLocation: String,
      numTimesHomeless: {
        type: Number,
        default: null,
      },
      totalLenHomeless: {
        type: Number,
        default: null,
      },
      homelessStartDate: {
        type: String,
        default: null,
      },
      lengthAtPriorLocation: {
        type: String,
        default: null,
      },
      lengthAtCurrentLocation: {
        type: String,
        default: null,
      },
    },

    pregnancies: {
      isPregnant: {
        type: Boolean,
        default: null,
      },
      ifYesWho: {
        type: String,
        default: null,
      },
      due: {
        type: String,
        default: null,
      },
    },

    insurance: {
      hasInsurance: {
        type: Boolean,
        default: null,
      },
      membersCovered: {
        type: Number,
        default: null,
      },
      healthInsuranceType: {
        type: String,
        default: null,
      },
    },

    domesticViolence: {
      fleeingDv: {
        type: Boolean,
        default: null,
      },
      YWCAcontacted: {
        type: Boolean,
        default: null,
      },
      hasCourtOrder: {
        type: Boolean,
        default: null,
      },
      dateLastIncident: {
        type: String,
        default: null,
      },
      anonymityPreferred: {
        type: Boolean,
        default: null,
      },
    },

    pets: {
      shelter: {
        type: Boolean,
        default: null,
      },
      dog: {
        type: Boolean,
        default: null,
      },
      cat: {
        type: Boolean,
        default: null,
      },
      serviceAnimal: {
        type: Boolean,
        default: null,
      },
      supportAnimal: {
        type: Boolean,
        default: null,
      },
      nameOne: {
        type: String,
        default: null,
      },
      nameTwo: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true }
);

export const Household: IFamilyModel = model<IFamily, IFamilyModel>(
  "household",
  householdSchema
);
