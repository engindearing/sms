import { View } from "react-native";
import React, { useEffect, useState } from "react";

import ShelterAPI from "../../../../../../api/shelter";
import { Text } from "native-base";
import { List } from "react-native-paper";
import Navigation from "../Navigation";

import Loader from "../../../../../../components/Loader";
import { useShelters } from "../../../../../../api/hooks/useShelters";
import useUpdateHousehold from "../../../../../../api/hooks/useUpdateHousehold";
import { useCurrentHousehold } from "../../../../../../api/hooks";

const Shelters = ({ prevStep, nextStep }) => {
  const {
    data: { household },
  } = useCurrentHousehold();

  const { mutate: updateHousehold } = useUpdateHousehold();

  const sheltersQuery = useShelters();

  const [selectedShelter, setSelectedShelter] = useState(household.shelter);

  const onSubmit = () => {
    if (!selectedShelter) {
      return alert("Please select a shelter");
    }

    updateHousehold(
      {
        householdId: household._id,
        info: { shelter: selectedShelter },
      },
      { onSuccess: nextStep }
    );
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text marginBottom={2} fontSize={"2xl"}>
        Which shelter are you staying at?
      </Text>

      {sheltersQuery.isLoading && <Loader />}

      <View>
        {sheltersQuery.data?.map((shelter) => (
          <List.Item
            key={shelter._id}
            onPress={() => setSelectedShelter(shelter._id)}
            style={
              selectedShelter == shelter._id && {
                backgroundColor: "#d2c7ff",
              }
            }
            title={shelter.name}
            description={shelter.address}
          />
        ))}
      </View>

      <Navigation prevStep={prevStep} handleSubmit={onSubmit} />
    </View>
  );
};

export default Shelters;
