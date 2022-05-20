import React from "react";

import { Input, FormControl } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TextInput(props) {
  let { error, label, touched, handleChange, name, value } = props;

  return (
    <FormControl isInvalid={error && touched ? true : false}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        size="xl"
        variant="underlined"
        InputLeftElement={
          <MaterialIcons name={props.icon} size={25} color="black" />
        }
        {...props}
      />
      <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
    </FormControl>
  );
}
