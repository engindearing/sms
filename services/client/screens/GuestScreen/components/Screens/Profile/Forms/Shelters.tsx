import { View } from "react-native";
import React, { useEffect, useState } from "react";

import ShelterAPI from "../../../../../../api/shelter";
import { Button, Text } from "native-base";
import { List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { updateHouseholdById } from "../../../../../../state/slices/householdSlice";
import Loader from "../../../../../../components/Loader";
import { setShelter } from "../../../../../../state/slices/shelterSlice";

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

  const onSubmit = async () => {
    if (!selectedShelter) {
      return alert("Please select a shelter");
    }

    let { shelter } = await ShelterAPI.fetchShelterById(selectedShelter);

    try {
      dispatch(
        updateHouseholdById({
          householdId: household._id,
          payload: { shelter: selectedShelter },
        })
      );

      dispatch(setShelter(shelter));
    } catch (error) {
      alert("Unable to update profile");
    }

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
                backgroundColor: "#d2c7ff",
              }
            }
            title={shelter.name}
            description={shelter.address}
          />
        ))}
      </View>

      <Button
        onPress={onSubmit}
        marginTop={5}
      >
        Update
      </Button>
    </View>
  );
};

export default Shelters;
