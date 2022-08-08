const memberValues = () => {
  return {
    date_of_enrollment: null,
    demographics: {
      firstName: "",
      lastName: "",
      gender: "",
      relationship: "",
      dob: "",
      ssn: "",
      income: "",
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
      listIndefiniteConditions: "",
      listIssues: "",
    },
    schools: {
      highestGradeCompleted: null,
      enrolledStatus: null,
      reasonNotEnrolled: null,
      attendanceStatus: null,
      schoolType: null,
      schoolName: null,
      mckinneySchool: null,
    },
    caseMembers: null,
    flag: null,
    percentComplete: 0,
  };
};

export default memberValues;
