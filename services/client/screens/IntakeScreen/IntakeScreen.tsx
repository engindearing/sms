import React, { useState } from "react";
import { View } from "react-native";
import useStep from "../../hooks/useStep";
import IntakeForm from "./IntakeForm";

import Navigation from "./Navigation";

const IntakeScreen = ({ route }) => {
  const [step, setStep, nextStep, prevStep] = useStep()

  const props = {
      step,
      setStep,
      nextStep,
      prevStep
  }  

  return (
      <View>
          <Navigation {...props} />
          <IntakeForm {...props} />
      </View>
  );
};

export default IntakeScreen;



