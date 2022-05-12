import mongoose, { Model, Schema, model } from "mongoose";

import { IFamilyDocument } from "./interfaces/IFamilyDocument";

interface IFamily extends IFamilyDocument {
  // Define any methods inside here
}

interface IFamilyModel extends Model<IFamily> {
  // Define any static methods here
}

const familySchema: Schema = new mongoose.Schema(
    {
        status: {
          type: String,
          enum: ["start", "completed"],
          default: "start",
        },
        
        percentComplete: {
          type: Number,
          default: 0
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
          liscensePlate: {
            type: String,
            default: null,
          },
        },
  
        lastPermanentAddress: {
          type: String,
          default: null,
        },
  
        homeless: {
          priorLocation: {
            type: String,
            default: null,
          },
          currentLocation: String,
          numTimesHomeless: {
            type: String,
            default: null,
          },
          totalLenHomeless: {
            type: String,
            default: null,
          },
          homelessStartDate: {
            type: Date,
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
  
        insurance: {
          pregnancies: {
            isPregnant: {
              type: Boolean,
              default: null,
            },
            ifYesWho: {
              type: String,
              default: null,
            },
            dueDate: {
              type: Date,
              default: null,
            },
          },
  
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
            type: Date,
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
  

  
  export const Family: IFamilyModel = model<IFamily, IFamilyModel>("Family", familySchema);
  