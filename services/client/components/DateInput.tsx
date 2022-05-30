import { View, Platform } from "react-native";
import React, { useState } from "react";
import { Text } from "native-base";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Button } from "native-base";

const DateInput = (props) => {
  return (
    <View
      style={{
        marginTop: "1%",
        marginBottom: "1%",
        width: "99%",
        display: "flex",
        flexDirection: 'row'

      }}
    >
      <RenderDatePicker />
    </View>
  );
};

const RenderDatePicker = () => {
  if (Platform.OS === "web") {
    return <input style={{ width: "100%" }} type={"date"} />;
  }

  return <DatePickerMobile />;
};

export const DatePickerMobile = () => {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return <DateTimePicker style={{flexGrow: 1}} value={date} onChange={onChange} />;
};

export default DateInput;
