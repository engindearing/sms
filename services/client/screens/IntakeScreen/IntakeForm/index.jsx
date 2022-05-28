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

import { Card } from "native-base";

import { initialValues } from "./utils/initialFormValues";

const IntakeForm = (props) => {
  const { formValues, setFormValues } = props;

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
      return <ClientRelease {...formProps} />;
    case 13:
      return <ClientReleaseSignature {...formProps} />;
    case 14:
      return <ClientReleaseStaffSig {...formProps} />;
    case 15:
      return <ThirdPartyConsent {...formProps} />;
    case 16:
      return <ThirdPartySigs {...formProps} />;
    case 17:
      return <GuestWaiver {...formProps} />;
    case 18:
      return <CaseManagement {...formProps} />;
    case 19:
      return <PhotoRelease {...formProps} />;
    case 20:
      return <CoreValues {...formProps} />;
    case 21:
      return <AntiDiscrimination {...formProps} />;
    case 22:
      return <Expectations {...formProps} />;
    case 23:
      return <Decorum {...formProps} />;
    case 24:
      return <AbideBy {...formProps} />;
    case 25:
      return <SuspensionAgreement {...formProps} />;
    case 26:
      return <GrievanceAppeal {...formProps} />;
    case 27:
      return <Belongings {...formProps} />;
    case 28:
      return <Schedule {...formProps} />;
    case 29:
      return <Safety {...formProps} />;
    case 30:
      return <AnimalNo {...formProps} />;
    case 31:
      return <AnimalYes {...formProps} />;
    case 32:
      return <Neighborhood {...formProps} />;
    case 33:
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
