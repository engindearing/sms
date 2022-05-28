import { Button } from "native-base";
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import useStep from "../../hooks/useStep";

import IntakeForm from "./IntakeForm";

import { getPreviousIntakeData } from "./IntakeForm/utils/getPreviousIntakeData";
import { initialValues } from "./IntakeForm/utils/initialFormValues";

const IntakeScreen = ({ route }) => {
  const [step, setStep, nextStep, prevStep] = useStep(0);

  const [formValues, setFormValues] = useState(initialValues());

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
    formValues,
    setFormValues,
  };

  useEffect(() => {
    getPreviousIntakeData();
  }, []);

  return (
    <ScrollView>
      <IntakeForm {...props} />
    </ScrollView>
  );
};

export default IntakeScreen;
