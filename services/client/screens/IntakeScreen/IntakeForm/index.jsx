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
} from "./forms";

import styled from "styled-components/native";

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
  });

  const onChange = (newFormValues) => {
    setFormValues({
      ...formValues,
      ...newFormValues
    });
  };

  useEffect(() => {
    console.log(formValues)
  }, [formValues])
  return (
    <FormContainer>
      <RenderForm {...props} onChange={onChange} formValues={formValues} />
    </FormContainer>
  );
};

const RenderForm = ({ step, nextStep, prevStep, onChange, formValues }) => {
  const formProps = {
    step,
    nextStep,
    prevStep,
    onChange,
    formValues,
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
    default:
      return <Text>Invalid</Text>;
  }
};

const FormContainer = styled.View`
  width: 100%;
`;

export default IntakeForm;
