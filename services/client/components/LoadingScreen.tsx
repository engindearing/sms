import { View, Text } from "react-native";
import React from "react";

import Loader from "./Loader";

const LoadingScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader />
    </View>
  );
};

export default LoadingScreen;
