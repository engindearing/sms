import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { FormContext } from "../../context";

const Contact = () => {
  let con = useContext(FormContext);

  return (
    <View>
      <Text>{con.hello}</Text>
    </View>
  );
};

export default Contact;
