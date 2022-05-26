import React from "react";

import { FormControl, Select, WarningOutlineIcon } from "native-base";

export default function SelectInput(props) {
  const { error, label, touched, children } = props;

  return (
    <FormControl marginBottom={'2%'} isInvalid={error && touched ? true : false}>
      <FormControl.Label>{label}</FormControl.Label>
      <Select {...props}>{children}</Select>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
