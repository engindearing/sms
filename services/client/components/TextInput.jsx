import React from "react";

import { Input, FormControl, WarningOutlineIcon } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

export default function TextInput(props) {
  let { error, label, touched, handleChange, name, value } = props;

  return (
    <FormControl isInvalid={error && touched ? true : false}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        size="xl"
        variant="underlined"
        marginBottom={0}
        InputLeftElement={
          <MaterialIcons name={props.icon} size={25} color="black" />
        }
        {...props}
      />
      <FormControl.ErrorMessage margin={0} leftIcon={<WarningOutlineIcon size="xs" />}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
