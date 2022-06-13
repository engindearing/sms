// This file contains types for the database layer.

interface DUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  organization: string;
  createdAt: string;
  updatedAt: string;
}

interface DHousehold {
  _id: string;
  user: string;
  lastFormVisited: string;
  status: string;
  percentComplete: number;
  contact: {
    phoneOne: {
      name: string;
      number: string;
      safeToLeaveMsg: boolean;
    };
    phoneTwo: {
      name: string;
      number: string;
      safeToLeaveMsg: boolean;
    };
    emergencyContact: {
      name: string;
      number: string;
    };
  };
  govBenefits: {
    foodstamps: boolean;
    cpsFps: boolean;
    RRH: boolean;
    housingVoucher: boolean;
    veteranServices: boolean;
    snap: boolean;
  };
  vehicle: {
    make: string;
    model: string;
    year: string;
    color: string;
    lic: string;
  };
  homeless: {
    lastPermanentAddress: string;
    currentLocation: string;
    lengthAtCurrentLocation: string;
    priorLocation: string;
    lengthAtPriorLocation: string;
    homelessStartDate: string;
    numTimesHomeless: number;
    totalLenHomeless: number;
  };
  pregnancies: {
    isPregnant: boolean;
    ifYesWho: string;
    due: string;
  };
  insurance: {
    hasInsurance: boolean;
    healthInsuranceType: string;
    membersCovered: number;
  };
  domesticViolence: {
    fleeingDv: boolean;
    anonymityPreferred: boolean;
    dateLastIncident: string;
    hasCourtOrder: boolean;
    YWCAcontacted: boolean;
  };
  pets: {
    shelter: boolean;
    amount: number;
    dog: boolean;
    cat: boolean;
    serviceAnimal: boolean;
    supportAnimal: boolean;
    nameOne: string;
    nameTwo: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface DMember {
  _id: string;
  household: string;
  demographics: {
    incomeSource: {
      job: boolean;
      TANF: boolean;
      SSI: boolean;
      SSDI: boolean;
      childSupport: boolean;
      other: boolean;
    };
    firstName: string;
    lastName: string;
    gender: string;
    relationship: string;
    dob: Date;
    ssn: string;
    income: string;
    race: string[];
    ethnicity: string;
  };
  barriers: {
    alcoholAbuse: boolean;
    developmentalDisabilities: boolean;
    chronicHealthIssues: boolean;
    drugAbuse: boolean;
    HIVAIDs: boolean;
    mentalIllness: boolean;
    physicalDisabilities: boolean;
    listIndefiniteConditions: string;
    listIssues: string;
  };
  schools: {
    highestGradeCompleted: number;
    enrolledStatus: string;
    reasonNotEnrolled: string;
    attendanceStatus: string;
    schoolType: string;
    schoolName: string;
    mckinneySchool: boolean;
  };
  flag: string;
  percentComplete: number;
  createdAt: Date;
  updatedAt: Date;
}

interface DOrganization {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface DShelter {
  _id: string;
  organization: string;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

interface DReservation {
  _id: string;
  user: string;
  shelter: string;
  beds: number;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface DError {
  message: string;
}
