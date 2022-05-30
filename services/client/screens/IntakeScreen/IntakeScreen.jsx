import { Text } from "native-base";
import React, { useEffect, useState, useRef } from "react";
import { ScrollView } from "react-native";
import { updateHousehold } from "../../api/household";
import { fetchOrCreateIntakeValues } from "../../api/intake";
import useStep from "../../hooks/useStep";

import IntakeForm from "./IntakeForm";

import steps from "./steps";

const IntakeScreen = ({ route }) => {
  const [formValues, setFormValues] = useState({});

  const [loading, setLoading] = useState(false);

  const { step, navigation: formNavigator } = useStep({ initialStep: 0, steps });

  const scrollRef = useRef();

  const nextStep = () => formNavigator.next();
  const prevStep = () => formNavigator.previous();
  const setStep = (step) => formNavigator.go(step);

  useEffect(async () => {
    setLoading(true);

    try {
      let intakeValues = await fetchOrCreateIntakeValues();

      setFormValues(intakeValues);

      if (intakeValues.lastFormVisited) {
        setStep(intakeValues.lastFormVisited);
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

    scrollRef.current?.scrollTo({
      y: 0,
    });

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
    <ScrollView ref={scrollRef}>
      <IntakeForm {...props} />
    </ScrollView>
  );
};

export default IntakeScreen;
