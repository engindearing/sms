import { Button } from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
import useStep from "../../hooks/useStep";
import IntakeForm from "./IntakeForm";

import Navigation from "./Navivgation";

const IntakeScreen = ({ route }) => {
  const [step, setStep, nextStep, prevStep] = useStep(1);

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
  };

  return (
    <View>
      <IntakeForm {...props} />
    </View>
  );
};

export default IntakeScreen;
