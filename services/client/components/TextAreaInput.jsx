import React from "react";

import { TextArea, FormControl, WarningOutlineIcon } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

export default function TextAreaInput(props) {
  let { error, label, touched, handleChange, name, value } = props;

  return (
    <FormControl style={{marginTop: '2%', marginBottom: '2%'}} isInvalid={error && touched ? true : false}>
      <FormControl.Label>{label}</FormControl.Label>
      <TextArea
        size="xl"
        variant="underlined"
        marginBottom={0}
        InputLeftElement={
          <MaterialIcons name={props.icon} size={25} color="black" />
        }
        {...props}
      />
      <FormControl.ErrorMessage
        margin={0}
        leftIcon={<WarningOutlineIcon size="xs" />}
      >
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
