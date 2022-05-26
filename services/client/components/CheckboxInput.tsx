import { View, Text } from "react-native";
import React from "react";

import { Checkbox } from "native-base";

const CheckboxInput = ({
  value = "",
  children,
  name,
  onChange = (n, v) => {},
}) => {
  return (
    <Checkbox value={value} onChange={(value) => onChange(name, value)}>
      {children}
    </Checkbox>
  );
};

export const CheckboxGroup = ({ children, onChange }) => {
  return (
    <View>
      {children.map((child) =>
        // Need to clone element to pass down extra props
        React.cloneElement(child, { onChange })
      )}
    </View>
  );
};

export default CheckboxInput;
