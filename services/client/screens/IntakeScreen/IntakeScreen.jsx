import { Text } from "native-base";
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { fetchOrCreateIntakeValues } from "../../api/intake";
import useStep from "../../hooks/useStep";

import IntakeForm from "./IntakeForm";

import { initialValues } from "./IntakeForm/utils/initialFormValues";

const IntakeScreen = ({ route }) => {
  const [step, setStep, nextStep, prevStep] = useStep(0);

  const [formValues, setFormValues] = useState(initialValues());

  const [loading, setLoading] = useState(false);

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
    formValues,
    setFormValues,
  };

  useEffect(async () => {
    setLoading(true);

    try {
      let intakeValues = await fetchOrCreateIntakeValues();

      setFormValues(intakeValues);
    } catch (error) {
      alert("internal server error");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <IntakeForm {...props} />
    </ScrollView>
  );
};

export default IntakeScreen;
