import mongoose, { Model, Schema, model } from "mongoose";

import { IMemberDocument } from "./interfaces/IMemberDocument";

interface IMember extends IMemberDocument {
  // Define any methods inside here
}

interface IMemberModel extends Model<IMember> {
  // Define any static methods here
}

const memberSchema: Schema = new mongoose.Schema(
    {
        household: {
          type: mongoose.SchemaTypes.ObjectId, ref: 'Household', required: true
        },

        demographics: {
          firstName: {
            type: String,
            default: null,
          },
          lastName: {
            type: String,
            default: null,
          },
          gender: {
            type: String,
            default: null,
          },
          relationship: {
            type: String,
            default: null,
          },
          dob: {
            type: String,
            default: null,
          },
          ssn: {
            type: String,
            default: null,
          },
          income: {
            type: String,
            default: null,
          },
          // employer: null,
          incomeSource: {
            job: {
              type: Boolean,
              default: null,
            },
            TANF: {
              type: Boolean,
              default: null,
            },
            SSI: {
              type: Boolean,
              default: null,
            },
            SSDI: {
              type: Boolean,
              default: null,
            },
            childSupport: {
              type: Boolean,
              default: null,
            },
            other: {
              type: Boolean,
              default: null,
            },
          },
          race: [],
          ethnicity: {
            type: String,
            default: null,
          },
        },
        barriers: {
          alcoholAbuse:  {
            type: Boolean,
            default: null,
          },
          developmentalDisabilities:  {
            type: Boolean,
            default: null,
          },
          chronicHealthIssues: {
            type: Boolean,
            default: null,
          } ,
          drugAbuse: {
            type: Boolean,
            default: null,
          },
          HIVAIDs: {
            type: Boolean,
            default: null,
          },
          mentalIllness: {
            type: Boolean,
            default: null,
          },
          physicalDisabilities: {
            type: Boolean,
            default: null,
          },
          listIndefiniteConditions: {
            type: String,
            default: null,
          },
          listIssues: {
            type: String,
            default: null,
          },
        },
        schools: {
          highestGradeCompleted: {
            type: String,
            default: null,
          },
          enrolledStatus: {
            type: Boolean,
            default: null,
          },
          reasonNotEnrolled: {
            type: String,
            default: null,
          },
          attendanceStatus: {
            type: String,
            default: null,
          },
          schoolType: {
            type: String,
            default: null,
          },
          schoolName: {
            type: String,
            default: null,
          },
          mckinneySchool: {
            type: Boolean,
            default: null,
          },
        },
        caseMembers: {
          type: Number,
          default: null,
        },
        flag: {
          type: String,
          default: null,
        },
        percentComplete: {
          type: Number,
          default: null,
        },
      },
    { timestamps: true }
  );
  

  
  export const Member: IMemberModel = model<IMember, IMemberModel>("Member", memberSchema);
  