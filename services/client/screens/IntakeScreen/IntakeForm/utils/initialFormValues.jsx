import { NODE_ENV, ENV } from "@env";

const devValues = {
  contactOneName: "Sheesh",
  contactOneNumber: "814 218 7640",
  contactOneSafeToLeaveMsg: true,
  contactTwoName: "Sheesh",
  contactTwoNumber: "814 218 7640",
  contactTwoSafeToLeaveMsg: true,
  emergencyContactName: "Sheesh",
  emergencyContactNumber: "814 218 7640",

  homeless: {
    lastPermanentAddress: "1211 test st",
    currentLocation: "1212 test st",
    lengthAtCurrentLocation: "2 days",
    priorLocation: "1213 test st",
    lengthAtPriorLocation: "3 days",
    homelessStartDate: "last week",
    numTimesHomeless: "10",
    totalLenHomeless: "4",
  },

  membersCovered: "2",
  insuranceType: "Medicare",

  make: "make",
  model: "model",
  year: "2022",
  color: "red",
  lic: "12312312312",

  foodstamps: false,
  cpsFps: false,
  rrh: false,
  housingVoucher: true,
  veteranServices: false,
  snap: true,

  isPregnant: true,
  ifYesWho: "stacy",
  due: "2023",

  domesticViolence: {
    fleeingDv: true,
    YWCAcontacted: true,
    hasCourtOrder: true,
    dateLastIncident: "A few days ago",
    anonymityPreferred: true,
  },

  pets: {
    shelter: false,
    amount: 2,
    dog: true,
    cat: true,
    serviceAnimal: true,
    supportAnimal: true,
    nameOne: "Doggo",
    nameTwo: "Catto",
  },

  members: [
    {
      date_of_enrollment: null,
      demographics: {
        firstName: "Jane",
        lastName: "Doe",
        gender: "Female",
        relationship: "Self",
        dob: "04/04/1990",
        ssn: "1234",
        income: "400",
        // employer: null,
        incomeSource: {
          job: false,
          TANF: false,
          SSI: false,
          SSDI: false,
          childSupport: false,
          other: false,
        },
        race: [],
        ethnicity: "",
      },
      barriers: {
        alcoholAbuse: false,
        developmentalDisabilities: false,
        chronicHealthIssues: false,
        drugAbuse: false,
        HIVAIDs: false,
        mentalIllness: false,
        physicalDisabilities: false,
        listIndefiniteConditions: false,
        listIssues: false,
      },
      schools: {
        highestGradeCompleted: null,
        enrolledStatus: false,
        reasonNotEnrolled: "",
        attendanceStatus: null,
        schoolType: null,
        schoolName: null,
        mckinneySchool: false,
      },
      caseMembers: null,
      flag: null,
      percentComplete: 0,
    },
    {
      date_of_enrollment: null,
      demographics: {
        firstName: "Jake",
        lastName: "Doe",
        gender: "Male",
        relationship: "Child",
        dob: "04/04/2005",
        ssn: "1149",
        income: "800",
        // employer: null,
        incomeSource: {
          job: false,
          TANF: false,
          SSI: false,
          SSDI: false,
          childSupport: false,
          other: false,
        },
        race: [],
        ethnicity: "",
      },
      barriers: {
        highestGradeCompleted: "9",
        enrolledStatus: true,
        reasonNotEnrolled: "",
        attendanceStatus: null,
        schoolType: null,
        schoolName: null,
        mckinneySchool: false,
      },
      schools: {
        highestGradeCompleted: "",
        enrolledStatus: false,
        reasonNotEnrolled: "",
        attendanceStatus: "Regular",
        schoolType: "public",
        schoolName: "Lincoln",
        mckinneySchool: false,
      },
      caseMembers: null,
      flag: null,
      percentComplete: 0,
    },
  ],
};

const prodValues = {
  lastPermanentAddress: "",
  currentLocation: "",
  lengthAtCurrentLocation: "",
  priorLocation: "",
  lengthAtPriorLocation: "",
  homelessStartDate: "",
  numTimesHomeless: "",
  totalLenHomeless: "",

  membersCovered: "",
  insuranceType: "",

  make: "",
  model: "",
  year: "",
  color: "",
  lic: "",

  foodstamps: false,
  cpsFps: false,
  rrh: false,
  housingVoucher: false,
  veteranServices: false,
  snap: false,

  isPregnant: false,
  ifYesWho: "",
  due: "",

  domesticViolence: {
    fleeingDv: true,
    YWCAcontacted: true,
    hasCourtOrder: true,
    dateLastIncident: "A few days ago",
    anonymityPreferred: true,
  },

  homeless: {
    lastPermanentAddress: "1211 test st",
    currentLocation: "1212 test st",
    lengthAtCurrentLocation: "2 days",
    priorLocation: "1213 test st",
    lengthAtPriorLocation: "3 days",
    homelessStartDate: "last week",
    numTimesHomeless: "10",
    totalLenHomeless: "4",
  },

  pets: {
    shelter: false,
    amount: 0,
    dog: false,
    cat: false,
    serviceAnimal: false,
    supportAnimal: false,
    nameOne: "",
    nameTwo: "",
  },

  members: [],
};

export const initialValues = () => {
  return NODE_ENV == "development" ? devValues : prodValues;
};
