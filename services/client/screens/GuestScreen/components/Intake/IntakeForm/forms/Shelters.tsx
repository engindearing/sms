import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ShelterAPI from "../../../../../../api/shelter";
import { FlatList } from "native-base";
import { List } from "react-native-paper";

const Shelters = () => {
  const [shelters, setShelters] = useState([]);
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

  useEffect(() => {
    console.log(shelters);
  }, [shelters]);

  return (
    <View style={{ width: "100%" }}>
      <Text>Shelters</Text>

      <View>
        {shelters.map((shelter) => (
          <List.Item title={shelter.name} description={shelter.address} />
        ))}
      </View>
    </View>
  );
};

export default Shelters;
