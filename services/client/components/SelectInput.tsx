import React from "react";

import { FormControl, Select, WarningOutlineIcon } from "native-base";

export default function SelectInput(props) {
  const { error, label, children } = props;

  return (
    <FormControl w="3/4" maxW="300" isInvalid={error}>
      <FormControl.Label>{label}</FormControl.Label>
      <Select {...props}>{children}</Select>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

