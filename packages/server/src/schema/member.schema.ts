import { z } from "zod";

export const createMemberSchema = z.object({
  household: z.string(),
  demographics: z.object({
    incomeSource: z.object({
      job: z.boolean(),
      TANF: z.boolean(),
      SSI: z.boolean(),
      SSDI: z.boolean(),
      childSupport: z.boolean(),
      other: z.boolean(),
    }),
    firstName: z.string(),
    lastName: z.string(),
    gender: z.string(),
    relationship: z.string(),
    dob: z.date(),
    ssn: z.string(),
    income: z.string(),
    race: z.array(z.string()),
    ethnicity: z.string(),
  }),
  barriers: z.object({
    alcoholAbuse: z.boolean(),
    developmentalDisabilities: z.boolean(),
    chronicHealthIssues: z.boolean(),
    drugAbuse: z.boolean(),
    HIVAIDs: z.boolean(),
    mentalIllness: z.boolean(),
    physicalDisabilities: z.boolean(),
    listIndefiniteConditions: z.string(),
    listIssues: z.string(),
  }),
  schools: z.object({
    highestGradeCompleted: z.number(),
    enrolledStatus: z.boolean(),
    reasonNotEnrolled: z.string(),
    attendanceStatus: z.enum([
      "Regular",
      "Irregular",
      "Dropped out",
      "Suspended",
      "Expelled",
    ]),
    schoolType: z.enum(["public", "private"]),
    schoolName: z.string(),
    mckinneySchool: z.boolean(),
  }),
  flag: z.string(),
  percentComplete: z.number(),
});

export type CreateMemberInput = z.TypeOf<typeof createMemberSchema>;

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        email:
 *          type: string
 *        household:
 *          type: string
 *        organization:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
