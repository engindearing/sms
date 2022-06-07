import React, { useEffect, useState, useRef } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import Loader from "../../../../components/Loader";
import useStep from "../../../../hooks/useStep";
import { updateHouseholdById } from "../../../../state/slices/householdSlice";

import IntakeForm from "./IntakeForm";

import steps from "./steps";

const IntakeScreen = ({ members, household }) => {
  const dispatch = useDispatch();

  const { step, navigation: formNavigator } = useStep({
    initialStep: household.lastFormVisited || "IntakeStart",
    steps,
  });

  const scrollRef = useRef();

  const nextStep = () => formNavigator.next();
  const prevStep = () => formNavigator.previous();
  const setStep = (step) => formNavigator.go(step);

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
  };

  useEffect(() => {
    dispatch(
      updateHouseholdById({
        householdId: household._id,
        payload: { lastFormVisited: step.id },
      })
    );

    scrollRef.current.scrollTo({ y: 0 });
  }, [step]);

  return (
    <ScrollView ref={scrollRef}>
      <IntakeForm {...props} />
    </ScrollView>
  );
};

export default IntakeScreen;
