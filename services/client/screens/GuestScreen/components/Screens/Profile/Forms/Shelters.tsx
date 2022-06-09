import { View } from "react-native";
import React, { useEffect, useState } from "react";

import ShelterAPI from "../../../../../../api/shelter";
import { Button, Text } from "native-base";
import { List } from "react-native-paper";
import Navigation from "../Navigation";

import { updateHousehold } from "../../../../../../api/household";
import { useDispatch, useSelector } from "react-redux";
import { updateHouseholdById } from "../../../../../../state/slices/householdSlice";
import Loader from "../../../../../../components/Loader";

const Shelters = ({ prevStep, nextStep, navigation }) => {
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

    navigation.navigate("Profile");
  };

  return (
    <View style={{ width: "100%", height: "100%", padding: 10 }}>
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
                backgroundColor: "rgba(0, 102, 255, 0.37)",
              }
            }
            title={shelter.name}
            description={shelter.address}
          />
        ))}
      </View>

      <Button
        onPress={onSubmit}
        style={{ position: "absolute", bottom: 5, width: "97%" }}
      >
        Update
      </Button>
    </View>
  );
};

export default Shelters;
