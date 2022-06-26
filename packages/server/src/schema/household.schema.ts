import { z } from "zod";

export const createHouseholdSchema = z.object({
  user: z.string(),
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
});

export const UpdateHouseholdInput = z.object({
  householdId: z.string(),

  household: z.object({
    cmisAnonymous: z.boolean().optional(),
    lastFormVisited: z.string().optional(),
    status: z.enum(["start", "complete"]).optional(),
    percentComplete: z.number().optional(),
    contact: z
      .object({
        phoneOne: z
          .object({
            name: z.string().optional(),
            number: z.string().optional(),
            safeToLeaveMsg: z.boolean().optional(),
          })
          .optional(),
        phoneTwo: z
          .object({
            name: z.string().optional(),
            number: z.string().optional(),
            safeToLeaveMsg: z.boolean().optional(),
          })
          .optional(),
        emergencyContact: z
          .object({
            name: z.string().optional(),
            number: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    govBenefits: z
      .object({
        foodstamps: z.boolean().optional(),
        cpsFps: z.boolean().optional(),
        RRH: z.boolean().optional(),
        housingVoucher: z.boolean().optional(),
        veteranServices: z.boolean().optional(),
        snap: z.boolean().optional(),
      })
      .optional(),
    vehicle: z
      .object({
        make: z.string().optional(),
        model: z.string().optional(),
        year: z.string().optional(),
        color: z.string().optional(),
        lic: z.string().optional(),
      })
      .optional(),
    homeless: z
      .object({
        lastPermanentAddress: z.string().optional(),
        currentLocation: z.string().optional(),
        lengthAtCurrentLocation: z.string().optional(),
        priorLocation: z.string().optional(),
        lengthAtPriorLocation: z.string().optional(),
        homelessStartDate: z.string().optional(),
        numTimesHomeless: z.number().optional(),
        totalLenHomeless: z.number().optional(),
      })
      .optional(),
    pregnancies: z
      .object({
        isPregnant: z.boolean().optional(),
        ifYesWho: z.string().optional(),
        due: z.string().optional(),
      })
      .optional(),
    insurance: z
      .object({
        hasInsurance: z.boolean().optional(),
        healthInsuranceType: z.string().optional(),
        membersCovered: z.number().optional(),
      })
      .optional(),
    domesticViolence: z
      .object({
        fleeingDv: z.boolean().optional(),
        anonymityPreferred: z.boolean().optional(),
        dateLastIncident: z.string().optional(),
        hasCourtOrder: z.boolean().optional(),
        YWCAcontacted: z.boolean().optional(),
      })
      .optional(),
    pets: z
      .object({
        shelter: z.boolean().optional(),
        amount: z.number().optional(),
        dog: z.boolean().optional(),
        cat: z.boolean().optional(),
        serviceAnimal: z.boolean().optional(),
        supportAnimal: z.boolean().optional(),
        nameOne: z.string().optional(),
        nameTwo: z.string().optional(),
      })
      .optional(),
  }),
});

export type CreateHouseholdInput = z.TypeOf<typeof createHouseholdSchema>;

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
