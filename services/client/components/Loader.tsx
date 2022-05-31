import { View, Text } from "react-native";
import React from "react";

import { Spinner } from "native-base";

const Loader = () => {
  return (
    <View>
      <Spinner color="indigo.500" size={"lg"} />
    </View>
  );
};

export default Loader;
