import { z } from "zod";
import { memberSchema } from "./member.schema";

export const householdSchema = z
  .object({
    _id: z.string(),
    user: z.string(),
    shelter: z.string(),
    cmisAnonymous: z.boolean(),
    lastFormVisited: z.string(),
    status: z.enum(["start", "complete"]),
    percentComplete: z.number(),
    contact: z.object({
      phoneOne: z.object({
        name: z.string(),
        number: z.string(),
        safeToLeaveMsg: z.boolean(),
      }),

      phoneTwo: z.object({
        name: z.string(),
        number: z.string(),
        safeToLeaveMsg: z.boolean(),
      }),

      emergencyContact: z.object({
        name: z.string(),
        number: z.string(),
      }),
    }),

    govBenefits: z.object({
      foodstamps: z.boolean(),
      cpsFps: z.boolean(),
      RRH: z.boolean(),
      housingVoucher: z.boolean(),
      veteranServices: z.boolean(),
      snap: z.boolean(),
    }),

    vehicle: z.object({
      make: z.string(),
      model: z.string(),
      year: z.string(),
      color: z.string(),
      lic: z.string(),
    }),

    homeless: z.object({
      lastPermanentAddress: z.string(),
      currentLocation: z.string(),
      lengthAtCurrentLocation: z.string(),
      priorLocation: z.string(),
      lengthAtPriorLocation: z.string(),
      homelessStartDate: z.string(),
      numTimesHomeless: z.number(),
      totalLenHomeless: z.number(),
    }),

    pregnancies: z.object({
      isPregnant: z.boolean(),
      ifYesWho: z.string(),
      due: z.string(),
    }),

    insurance: z.object({
      hasInsurance: z.boolean(),
      healthInsuranceType: z.string(),
      membersCovered: z.number(),
    }),

    domesticViolence: z.object({
      fleeingDv: z.boolean(),
      anonymityPreferred: z.boolean(),
      dateLastIncident: z.string(),
      hasCourtOrder: z.boolean(),
      YWCAcontacted: z.boolean(),
    }),

    pets: z.object({
      shelter: z.boolean(),
      amount: z.number(),
      dog: z.boolean(),
      cat: z.boolean(),
      serviceAnimal: z.boolean(),
      supportAnimal: z.boolean(),
      nameOne: z.string(),
      nameTwo: z.string(),
    }),

    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .deepPartial();

export const updateHouseholdInput = z.object({
  householdId: z.string(),
  household: householdSchema.omit({
    user: true,
    createdAt: true,
    updatedAt: true,
  }),
});

export const addMemberInput = z.object({
  householdId: z.string(),
  member: memberSchema.omit({
    _id: true,
    household: true,
    createdAt: true,
    updatedAt: true,
  }),
});

export type CreateHouseholdInput = z.TypeOf<typeof householdSchema>;
