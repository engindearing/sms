import { z } from "zod";

export const guestSchema = z
  .object({
    _id: z.string(),
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
    updatedAt: z.date(),
    createdAt: z.date(),
  })
  .deepPartial();

export const createGuestInput = guestSchema.omit({
  _id: true,
  household: true,
  updatedAt: true,
  createdAt: true,
});

export const bulkUpdateGuestsInput = z.array(
  guestSchema.omit({
    _id: true,
    household: true,
    updatedAt: true,
    createdAt: true,
  })
);
