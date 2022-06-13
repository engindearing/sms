import { View } from "react-native";
import React, { useEffect, useState } from "react";

import ShelterAPI from "../../../../../../api/shelter";
import { Text } from "native-base";
import { List } from "react-native-paper";
import Navigation from "../Navigation";

import { useDispatch, useSelector } from "react-redux";
import { updateHouseholdById } from "../../../../../../state/slices/householdSlice";

import Loader from "../../../../../../components/Loader";

const Shelters = ({ prevStep, nextStep }) => {
  const dispatch = useDispatch();
  const { household } = useSelector((state: any) => state.household);

  const [shelters, setShelters] = useState([]);
  const [selectedShelter, setSelectedShelter] = useState(household.shelter);

  const [loading, setLoading] = useState(false);

  const fetchShelters = async () => {
    setLoading(true);
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
      <Text marginBottom={2} fontSize={"2xl"}>
        Which shelter are you staying at?
      </Text>

      {loading && <Loader />}

      <View>
        {shelters.map((shelter) => (
          <List.Item
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
