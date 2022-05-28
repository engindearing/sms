import { View, Text } from "react-native";
import React from "react";

import { Checkbox } from "native-base";

import { WarningOutlineIcon } from "native-base";

const CheckboxInput = ({
  value = "",
  children,
  name,
  error = null,
  touched = null,
  onChange = (n, v) => {},
  style = {},
  isChecked = false,
}) => {
  return (
    <Checkbox
      isInvalid={error && touched}
      value={value}
      onChange={(value) => onChange(name, value)}
      isChecked={isChecked}
      
    >
      {children}
    </Checkbox>
  );
};

export const CheckboxGroup = ({
  children,
  onChange = (n, v) => {},
  error = null,
  touched = null,
}) => {
  return (
    <View>
      {children.map((child) =>
        // Need to clone element to pass down extra props
        React.cloneElement(child, { onChange, error, touched })
      )}
      <Text style={{ marginTop: "3%" }}>
        {error && touched ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <WarningOutlineIcon
              size="xs"
              style={{ color: "red", marginRight: "3%" }}
            />
            <Text style={{ color: "red" }}>{error}</Text>
          </View>
        ) : (
          <></>
        )}
      </Text>
    </View>
  );
};

export default CheckboxInput;
