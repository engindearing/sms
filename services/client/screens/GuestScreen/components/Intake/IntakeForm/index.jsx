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
  IntakeComplete,
} from "./forms";

import styled from "styled-components/native";

import { Card } from "native-base";
import Shelters from "./forms/Shelters";

const IntakeForm = (props) => {
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
          <RenderForm {...props} />
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
  household,
  members,
}) => {
  const formProps = {
    step,
    nextStep,
    prevStep,
    onChange,
    household,
    members,
  };

  switch (step.id) {
    case "IntakeStart":
      return <IntakeStart {...formProps} />;
    case "Shelters":
      return <Shelters {...formProps} />;
    case "ContactInfo":
      return <ContactInfo {...formProps} />;
    case "FamilyMembers":
      return <FamilyMembers {...formProps} />;
    case "FamilyDemographics":
      return <FamilyDemographics {...formProps} />;
    case "RaceEthnicityInfo":
      return <RaceEthnicityInfo {...formProps} />;
    case "BarriersPage":
      return <BarriersPage {...formProps} />;
    case "ChildSchoolInfo":
      return <ChildSchoolInfo {...formProps} />;
    case "DomesticViolence":
      return <DomesticViolence {...formProps} />;
    case "HomelessHistory":
      return <HomelessHistory {...formProps} />;
    case "Insurance":
      return <Insurance {...formProps} />;
    case "AdditionalInfo":
      return <AdditionalInfo {...formProps} />;
    case "Pets":
      return <Pets {...formProps} />;

    case "ClientRelease":
      return <ClientRelease {...formProps} />;
    case "ClientReleaseSignature":
      return <ClientReleaseSignature {...formProps} />;
    case "ClientReleaseStaffSig":
      return <ClientReleaseStaffSig {...formProps} />;
    case "ThirdPartyConsent":
      return <ThirdPartyConsent {...formProps} />;
    case "ThirdPartySigs":
      return <ThirdPartySigs {...formProps} />;
    case "GuestWaiver":
      return <GuestWaiver {...formProps} />;
    case "CaseManagement":
      return <CaseManagement {...formProps} />;
    case "PhotoRelease":
      return <PhotoRelease {...formProps} />;
    case "CoreValues":
      return <CoreValues {...formProps} />;
    case "AntiDiscrimination":
      return <AntiDiscrimination {...formProps} />;
    case "Expectations":
      return <Expectations {...formProps} />;
    case "Decorum":
      return <Decorum {...formProps} />;
    case "AbideBy":
      return <AbideBy {...formProps} />;
    case "SuspensionAgreement":
      return <SuspensionAgreement {...formProps} />;
    case "GrievanceAppeal":
      return <GrievanceAppeal {...formProps} />;
    case "Belongings":
      return <Belongings {...formProps} />;
    case "Schedule":
      return <Schedule {...formProps} />;
    case "Safety":
      return <Safety {...formProps} />;
    case "AnimalNo":
      return <AnimalNo {...formProps} />;
    case "AnimalYes":
      return <AnimalYes {...formProps} />;
    case "Neighborhood":
      return <Neighborhood {...formProps} />;
    case "NeighborhoodExpectations":
      return <NeighborhoodExpectations {...formProps} />;
    case "IntakeComplete":
      return <IntakeComplete {...formProps} />;
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

  ${(props) => props.theme.isTablet && "width: 95%;"}

  ${(props) => props.theme.isMobileL && "width: 100%;"}
`;

export default IntakeForm;
