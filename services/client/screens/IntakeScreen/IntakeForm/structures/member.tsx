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
        other: false
      },
      race: [],
      ethnicity: "",
    },
    barriers: {
      alcoholAbuse: null,
      developmentalDisabilities: null,
      chronicHealthIssues: null,
      drugAbuse: null,
      HIVAIDs: null,
      mentalIllness: null,
      physicalDisabilities: null,
      listIndefiniteConditions: null,
      listIssues: null,
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
