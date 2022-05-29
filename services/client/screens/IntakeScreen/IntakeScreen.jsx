import { Text } from "native-base";
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { updateHousehold } from "../../api/household";
import { fetchOrCreateIntakeValues } from "../../api/intake";
import useStep from "../../hooks/useStep";

import IntakeForm from "./IntakeForm";

import { initialValues } from "./IntakeForm/utils/initialFormValues";
import steps from "./steps";

const IntakeScreen = ({ route }) => {
  const [formValues, setFormValues] = useState(initialValues());

  const [loading, setLoading] = useState(false);

  const { step, navigation } = useStep({ initialStep: 0, steps });

  const nextStep = () => navigation.next();
  const prevStep = () => navigation.previous();
  const setStep = (step) => navigation.go(step);

  useEffect(async () => {
    setLoading(true);

    console.log(step);

    try {
      let intakeValues = await fetchOrCreateIntakeValues();

      setFormValues(intakeValues);

      if (intakeValues.lastFormVisited) {
        navigation.go(intakeValues.lastFormVisited);
      }
    } catch (error) {
      // redirect to error page

      alert("error, please try again later");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(async () => {
    if (step.id == "IntakeStart") return;

    await updateHousehold(formValues._id, { lastFormVisited: step.id });
  }, [step]);

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
    formValues,
    setFormValues,
  };

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
