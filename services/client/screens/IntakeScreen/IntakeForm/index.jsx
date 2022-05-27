import React, { useEffect, useState } from "react";

import { Text, View } from "react-native";

import {
  AdditionalInfo,
  BarriersPage,
  ChildSchoolInfo,
  ContactInfo,
  DomesticViolence,
  FamilyDemographics,
  RaceEthnicityInfo,
  FamilyMembers,
  HomelessHistory,
  Insurance,
  IntakeStart,
  Pets,
  ValidateFormData,
  ClientRelease,
  ClientReleaseStaffSig,
  ClientReleaseSignature,
  ThirdPartyConsent,
  ThirdPartySigs,
  GuestWaiver,
  CaseManagement,
  PhotoRelease,
  CoreValues,
  AntiDiscrimination,
  Expectations,
  Decorum,
  AbideBy,
  SuspensionAgreement,
  GrievanceAppeal,
  Belongings,
  Schedule,
  Safety,
  AnimalNo,
  AnimalYes,
  Neighborhood,
  NeighborhoodExpectations,
} from "./forms";

import styled from "styled-components/native";

import { Wrap, Card } from "native-base";

const IntakeForm = (props) => {
  const [formValues, setFormValues] = useState({
    contactOneName: "Sheesh",
    contactOneNumber: "814 218 7640",
    contactOneSafeToLeaveMsg: true,
    contactTwoName: "Sheesh",
    contactTwoNumber: "814 218 7640",
    contactTwoSafeToLeaveMsg: true,
    emergencyContactName: "Sheesh",
    emergencyContactNumber: "814 218 7640",

    lastPermanentAddress: "1211 test st",
    currentLocation: "1212 test st",
    lengthAtCurrentLocation: "2 days",
    priorLocation: "1213 test st",
    lengthAtPriorLocation: "3 days",
    homelessStartDate: "last week",
    numTimesHomeless: "10",
    totalLenHomeless: "4",

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
          gender: "",
          relationship: "Self",
          dob: "04/04/1990",
          ssn: "",
          income: "",
          // employer: null,
          incomeSource: {
            job: "",
            TANF: "",
            SSI: "",
            SSDI: "",
            childSupport: "",
            other: "",
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
          gender: "",
          relationship: "Child",
          dob: "04/04/2005",
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
          highestGradeCompleted: null,
          enrolledStatus: false,
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
          attendanceStatus: "",
          schoolType: "",
          schoolName: "",
          mckinneySchool: false,
        },
        caseMembers: null,
        flag: null,
        percentComplete: 0,
      },
    ],
  });

  const onChange = (newFormValues) => {
    setFormValues({
      ...formValues,
      ...newFormValues,
    });
  };

  return (
    <Wrapper>
      <FormContainer>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <RenderForm {...props} onChange={onChange} formValues={formValues} />
        </Card>
      </FormContainer>
    </Wrapper>
  );
};

const RenderForm = ({
  step,
  nextStep,
  prevStep,
  onChange,
  formValues,
  setFormValues,
}) => {
  const formProps = {
    step,
    nextStep,
    prevStep,
    onChange,
    formValues,
    setFormValues,
  };

  switch (step) {
    case 0:
      return <IntakeStart {...formProps} />;
    case 1:
      return <ContactInfo {...formProps} />;
    case 2:
      return <FamilyMembers {...formProps} />;
    case 3:
      return <FamilyDemographics {...formProps} />;
    case 4:
      return <RaceEthnicityInfo {...formProps} />;
    case 5:
      return <BarriersPage {...formProps} />;
    case 6:
      return <ChildSchoolInfo {...formProps} />;
    case 7:
      return <DomesticViolence {...formProps} />;
    case 8:
      return <HomelessHistory {...formProps} />;
    case 9:
      return <Insurance {...formProps} />;
    case 10:
      return <AdditionalInfo {...formProps} />;
    case 11:
      return <Pets {...formProps} />;
    case 12:
      return <ValidateFormData {...formProps} />;
    case 13:
      return <ClientRelease {...formProps} />;
    case 14:
      return <ClientReleaseSignature {...formProps} />;
    case 15:
      return <ClientReleaseStaffSig {...formProps} />;
    case 16:
      return <ThirdPartyConsent {...formProps} />;
    case 17:
      return <ThirdPartySigs {...formProps} />;
    case 18:
      return <GuestWaiver {...formProps} />;
    case 19:
      return <CaseManagement {...formProps} />;
    case 20:
      return <PhotoRelease {...formProps} />;
    case 21:
      return <CoreValues {...formProps} />;
    case 22:
      return <AntiDiscrimination {...formProps} />;
    case 23:
      return <Expectations {...formProps} />;
    case 24:
      return <Decorum {...formProps} />;
    case 25:
      return <AbideBy {...formProps} />;
    case 26:
      return <SuspensionAgreement {...formProps} />;
    case 27:
      return <GrievanceAppeal {...formProps} />;
    case 28:
      return <Belongings {...formProps} />;
    case 29:
      return <Schedule {...formProps} />;
    case 30:
      return <Safety {...formProps} />;
    case 31:
      return <AnimalNo {...formProps} />;
    case 32:
      return <AnimalYes {...formProps} />;
    case 33:
      return <Neighborhood {...formProps} />;
    case 34:
      return <NeighborhoodExpectations {...formProps} />;
    default:
      return <Text>Invalid</Text>;
  }
};

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FormContainer = styled.View`
  width: 50%;

  ${(props) => props.theme.isLaptop && "width: 50%;"}

  ${(props) => props.theme.isTablet && "width: 70%;"}

  ${(props) => props.theme.isMobileL && "width: 100%;"}
`;

export default IntakeForm;
