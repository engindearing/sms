import { Button } from "native-base";
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import useStep from "../../hooks/useStep";
import IntakeForm from "./IntakeForm";

import Navigation from "./Navivgation";

const IntakeScreen = ({ route }) => {
  const [step, setStep, nextStep, prevStep] = useStep(23);

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
  };

  return (
    <ScrollView>
      <IntakeForm {...props} />
    </ScrollView>
  );
};

export default IntakeScreen;
