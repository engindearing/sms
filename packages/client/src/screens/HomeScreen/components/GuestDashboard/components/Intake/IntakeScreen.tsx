import { omitUndefined } from "native-base/lib/typescript/theme/tools";
import React, { useEffect, useRef } from "react";
import { ScrollView, ScrollViewComponent } from "react-native";
import { useCurrentHousehold } from "../../../../../../api/hooks/useCurrentUser";
import useUpdateHousehold from "../../../../../../api/hooks/useUpdateHousehold";
import useStep from "../../../../../../hooks/useStep";
import IntakeForm from "./IntakeForm";
import steps from "./steps";

const IntakeScreen = ({ members }: {household:any, members:any}) => {
  const { mutate: updateHousehold } = useUpdateHousehold();

  const householdQuery = useCurrentHousehold()
 
  const { household } = householdQuery.data!

  const { step, navigation: formNavigator } = useStep({
    initialStep: household?.lastFormVisited || "IntakeStart",

    steps,
  });
  
  const nextStep = () => formNavigator.next();
  const prevStep = () => formNavigator.previous();
  const setStep = (step: string) => formNavigator.go(step);

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
    household,
    members
  }

  const scrollRef = useRef() as React.MutableRefObject<ScrollView>;

  useEffect(() => {
    updateHousehold({householdId: household._id!, household: {lastFormVisited: step.id}});

    scrollRef.current.scrollTo({ y: 0 });
  }, [step]);

  return (
    <ScrollView ref={scrollRef}>
      <IntakeForm {...props} />
    </ScrollView>
  );
};

export default IntakeScreen;
