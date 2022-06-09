import { View } from "react-native";
import React, { useEffect, useState } from "react";

import ShelterAPI from "../../../../../../api/shelter";
import { Text } from "native-base";
import { List } from "react-native-paper";
import Navigation from "../Navigation";

import { updateHousehold } from "../../../../../../api/household";
import { useDispatch, useSelector } from "react-redux";
import { updateHouseholdById } from "../../../../../../state/slices/householdSlice";

const Shelters = ({ prevStep, nextStep }) => {
  const dispatch = useDispatch();
  const { household } = useSelector((state: any) => state.household);

  const [shelters, setShelters] = useState([]);
  const [selectedShelter, setSelectedShelter] = useState(household.shelter);

  const [loading, setLoading] = useState(false);

  const fetchShelters = async () => {
    try {
      let response = await ShelterAPI.getAllShelters();

      setShelters(response.shelters);
    } catch (error) {
      alert("Unable to get shelters");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShelters();
  }, []);

  const onSubmit = () => {
    if (!selectedShelter) {
      return alert("Please select a shelter");
    }

    dispatch(
      updateHouseholdById({
        householdId: household._id,
        payload: { shelter: selectedShelter },
      })
    );

    nextStep();
  };

  return (
    <View style={{ width: "100%" }}>
      <Text fontSize={"2xl"}>Select the shelter you're staying at:</Text>

      <View>
        {shelters.map((shelter) => (
          <List.Item
            onPress={() => setSelectedShelter(shelter._id)}
            style={
              selectedShelter == shelter._id && {
                backgroundColor: "rgba(0, 102, 255, 0.37)",
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
